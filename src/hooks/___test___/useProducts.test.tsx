// no se est'a testeando cuando generar error
import { renderHook, waitFor } from "@testing-library/react";
import { useProductos } from "../useProducts";
import { fetchData } from "../../proxy/fetchData";

// MOK QUE DEBO LLEVAR A OTRO FICHERO
jest.mock("../../proxy/fetchData");
jest.mock("../../interfaces/categories", () => ({
  grupos: {
    phone: ["phone", "laptop"],
    shirt: ["shirt", "pants"],
  },
}));
//----------------------------------------

describe("useProductos", () => {
  beforeEach(() => {
    (fetchData as jest.Mock).mockReset();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it("debe cargar productos correctamente", async () => {
    const mockProductos = [
      { title: "Producto 1", description: "Descripción 1", category: "phone" },
      { title: "Producto 2", description: "Descripción 2", category: "shirt" },
    ];

    (fetchData as jest.Mock).mockResolvedValue({ products: mockProductos });

    const { result } = renderHook(() => useProductos("", ""));

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.productosFiltrados).toEqual(mockProductos);
  });

  it("debe filtrar productos por búsqueda", async () => {
    const mockProductos = [
      { title: "Producto 1", description: "Descripción 1", category: "phone" },
      { title: "Producto 2", description: "Descripción 2", category: "shirt" },
    ];

    (fetchData as jest.Mock).mockResolvedValue({ products: mockProductos });

    const { result } = renderHook(() => useProductos("producto", ""));

    await waitFor(() => expect(result.current.productosFiltrados).toEqual(mockProductos));
  });

  it("debe filtrar productos por categoría", async () => {
    const mockProductos = [
      { title: "Producto 1", description: "Descripción 1", category: "phone" },
      { title: "Producto 2", description: "Descripción 2", category: "shirt" },
    ];

    (fetchData as jest.Mock).mockResolvedValue({ products: mockProductos });

    const { result } = renderHook(() => useProductos("", "phone"));

    await waitFor(() => {
      console.log("Productos filtrados: ", result.current.productosFiltrados);
      expect(result.current.productosFiltrados).toEqual([
        { title: "Producto 1", description: "Descripción 1", category: "phone" }
      ]);
    });
  });

  it("debe manejar un caso de categoría no encontrada", async () => {
    const mockProductos = [
      { title: "Producto 1", description: "Descripción 1", category: "phone" },
      { title: "Producto 2", description: "Descripción 2", category: "shirt" },
    ];

    (fetchData as jest.Mock).mockResolvedValue({ products: mockProductos });

    const { result } = renderHook(() => useProductos("", "no-category"));

    await waitFor(() => expect(result.current.productosFiltrados).toEqual(mockProductos));

    expect(console.error).toHaveBeenCalledWith("Categoría no encontrada: no-category");
  });

  it("debe manejar búsqueda vacía", async () => {
    const mockProductos = [
      { title: "Producto 1", description: "Descripción 1", category: "phone" },
      { title: "Producto 2", description: "Descripción 2", category: "shirt" },
    ];

    (fetchData as jest.Mock).mockResolvedValue({ products: mockProductos });

    const { result } = renderHook(() => useProductos("", ""));

    await waitFor(() => expect(result.current.productosFiltrados).toEqual(mockProductos));
  });
});
