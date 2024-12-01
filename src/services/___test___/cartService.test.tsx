import { calcularTotal, incrementarCantidad, decrementarCantidad, agregarAlCarrito } from '../cartService/cartService';
import { CarritoProduct } from '../../interfaces/CarritoProduct';

// Test para calcular el total
describe('Funciones de carrito', () => {
  it('debe calcular el total correctamente', () => {
    const productos: CarritoProduct[] = [
      { id: 1, title: "Producto A", price: 50, description: "Descripción A", category: "Categoría A", images: "url", cantidad: 2 },
      { id: 2, title: "Producto B", price: 30, description: "Descripción B", category: "Categoría B", images: "url", cantidad: 1 },
    ];

    const total = calcularTotal(productos);

    expect(total).toBe(130); // (50 * 2) + (30 * 1)
  });

  it('debe registrar un error si el precio del producto no es válido', () => {
    // Espiar console.error para verificar si se llama con el mensaje esperado
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  
    const productos: CarritoProduct[] = [
      { id: 1, title: "Producto A", price: 50, description: "Descripción A", category: "Categoría A", images: "url", cantidad: 2 },
      { id: 2, title: "Producto B", price: NaN, description: "Descripción B", category: "Categoría B", images: "url", cantidad: 1 },
    ];
  
    // Ejecutar la función
    const total = calcularTotal(productos);
  
    // Verificar que el total sea correcto (debe sumar solo el Producto A)
    expect(total).toBe(100); // (50 * 2) = 100
  
    // Verificar que console.error haya sido llamado con el mensaje esperado
    expect(consoleErrorSpy).toHaveBeenCalledWith('El precio del producto Producto B no es válido.');
  
    // Restaurar la implementación original de console.error
    consoleErrorSpy.mockRestore();
  });  

  // Test para incrementar la cantidad
  it('debe incrementar la cantidad del producto', () => {
    const productos: CarritoProduct[] = [
      { id: 1, title: "Producto A", price: 50, description: "Descripción A", category: "Categoría A", images: "url", cantidad: 2 },
    ];

    const nuevosProductos = incrementarCantidad(productos, 1);

    expect(nuevosProductos[0].cantidad).toBe(3); // La cantidad de Producto A debe incrementarse a 3
  });

  // Test para decrementar la cantidad
  it('debe decrementar la cantidad del producto', () => {
    const productos: CarritoProduct[] = [
      { id: 1, title: "Producto A", price: 50, description: "Descripción A", category: "Categoría A", images: "url", cantidad: 2 },
    ];

    const nuevosProductos = decrementarCantidad(productos, 1);

    expect(nuevosProductos[0].cantidad).toBe(1); // La cantidad de Producto A debe decrementarse a 1
  });

  // Test para agregar un producto al carrito si no existe
  it('debe agregar un producto al carrito si no existe', () => {
    const mockSetCarrito = jest.fn();

    const producto: CarritoProduct = {
      id: 3,
      title: "Producto C",
      price: 100,
      description: "Descripción C",
      category: "Categoría C",
      images: "url",
      cantidad: 1,
    };

    agregarAlCarrito(producto, [], mockSetCarrito);

    expect(mockSetCarrito).toHaveBeenCalledWith(expect.any(Function)); // Verifica que setCarrito haya sido llamado con una función

    const callback = mockSetCarrito.mock.calls[0][0]; // Obtener la función de setCarrito
    callback([]); // Llamar a la función con el carrito vacío

    expect(callback([])).toEqual([{
      id: 3,
      title: "Producto C",
      price: 100,
      description: "Descripción C",
      category: "Categoría C",
      images: "url",
      cantidad: 1, // El producto debe agregarse con cantidad 1
    }]);
  });

  // Test para incrementar la cantidad si el producto ya está en el carrito
  it('debe incrementar la cantidad si el producto ya está en el carrito', () => {
    const mockSetCarrito = jest.fn();
  
    const carritoInicial: CarritoProduct[] = [
      { id: 1, title: "Producto A", price: 50, description: "Descripción A", category: "Categoría A", images: "url", cantidad: 1 },
    ];
  
    const producto: CarritoProduct = {
      id: 1,
      title: "Producto A",
      price: 50,
      description: "Descripción A",
      category: "Categoría A",
      images: "url",
      cantidad: 1,
    };
  
    agregarAlCarrito(producto, carritoInicial, mockSetCarrito);
  
    expect(mockSetCarrito).toHaveBeenCalledWith(expect.any(Function)); // Verifica que setCarrito haya sido llamado con una función
  
    const callback = mockSetCarrito.mock.calls[0][0]; // Obtener la función de setCarrito
    callback(carritoInicial); // Llamar con el carrito inicial
  
    expect(callback(carritoInicial)).toEqual([{
      id: 1,
      title: "Producto A",
      price: 50,
      description: "Descripción A",
      category: "Categoría A",
      images: "url",
      cantidad: 2, // La cantidad debe ser incrementada a 2
    }]);
  });  
});

