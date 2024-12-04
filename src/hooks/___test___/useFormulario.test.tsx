// este test falla
import { renderHook, act } from "@testing-library/react";
import { useFormulario } from "../useFormulario";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

// MOKS USADAS
jest.mock("../../context/CartContext", () => ({
  useCart: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
//------------------------------------------

const mockSetCarrito = jest.fn();
const mockNavigate = jest.fn();

describe("useFormulario", () => {
  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      setCarrito: mockSetCarrito,
    });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("debe manejar el envío del formulario sin errores", () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useFormulario(onSubmit));

    act(() => {
      result.current.manejarCambio({
        target: { name: "nombres", value: "Juan" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.manejarCambio({
        target: { name: "apellidos", value: "Pérez" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.manejarCambio({
        target: { name: "distrito", value: "San Borja" },
      } as React.ChangeEvent<HTMLSelectElement>);
      result.current.manejarCambio({
        target: { name: "direccion", value: "Av. Principal 123" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.manejarCambio({
        target: { name: "referencia", value: "Cerca al parque" },
      } as React.ChangeEvent<HTMLInputElement>);
      result.current.manejarCambio({
        target: { name: "celular", value: "987654321" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(Object.values(result.current.errores)).not.toContain("Campo obligatorio");
    console.log("Estado del formulario antes del envío:", result.current.formUser);

    const mockEvent = { preventDefault: jest.fn() };
    act(() => {
      result.current.manejarEnvio(mockEvent as unknown as React.FormEvent);
    });

    expect(onSubmit).toHaveBeenCalledWith({
      nombres: "Juan",
      apellidos: "Pérez",
      distrito: "San Borja",
      direccion: "Av. Principal 123",
      referencia: "Cerca al parque",
      celular: "987654321",
    });
  });

  it("debe limpiar los errores al cambiar un campo del formulario", () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useFormulario(onSubmit));

    act(() => {
      result.current.manejarCambio({
        target: { name: "nombres", value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    const mockEvent = { preventDefault: jest.fn() };
    act(() => {
      result.current.manejarEnvio(mockEvent as unknown as React.FormEvent);
    });

    expect(result.current.errores.nombres).toBe("Campo obligatorio");

    act(() => {
      result.current.manejarCambio({
        target: { name: "nombres", value: "Juan" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errores.nombres).toBe("");
  });
});
