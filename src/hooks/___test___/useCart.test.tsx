import { renderHook, act } from '@testing-library/react';
import { useCarItem } from '../useCart';
import { useCart } from '../../context/CartContext';
import { calcularTotal, incrementarCantidad, decrementarCantidad } from '../../services/cartService/cartService';
import { CarritoProduct } from '../../interfaces/CarritoProduct';

// MOKS QUE DEBO COLOCAR EN OTRO FICHERO
jest.mock('../../context/CartContext', () => ({
  useCart: jest.fn(),
}));

jest.mock('../../services/cartService/cartService', () => ({
  calcularTotal: jest.fn(),
  incrementarCantidad: jest.fn(),
  decrementarCantidad: jest.fn(),
}));
//-----------------------------------------------------

describe('useCarItem', () => {
  const mockSetCarrito = jest.fn();
  const mockEliminarDelCarrito = jest.fn();

  const productosMock: CarritoProduct[] = [
    { id: 1, title: 'Producto 1', description: 'Descripción', category: 'Electronics', price: 100, images: 'img.jpg', cantidad: 2 },
    { id: 2, title: 'Producto 2', description: 'Descripción', category: 'Electronics', price: 50, images: 'img2.jpg', cantidad: 1 },
  ];

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      setCarrito: mockSetCarrito,
      eliminarDelCarrito: mockEliminarDelCarrito,
    });

    (calcularTotal as jest.Mock).mockReturnValue(250);
  });

  it('debería incrementar la cantidad de un producto', () => {
    (incrementarCantidad as jest.Mock).mockReturnValue([
      { id: 1, title: 'Producto 1', description: 'Descripción', category: 'Electronics', price: 100, images: 'img.jpg', cantidad: 3 },
      { id: 2, title: 'Producto 2', description: 'Descripción', category: 'Electronics', price: 50, images: 'img2.jpg', cantidad: 1 },
    ]);

    const { result } = renderHook(() => useCarItem(productosMock));

    act(() => {
      result.current.handleIncrementar(1);
    });

    expect(incrementarCantidad).toHaveBeenCalledWith(productosMock, 1);
    expect(mockSetCarrito).toHaveBeenCalledWith([
      { id: 1, title: 'Producto 1', description: 'Descripción', category: 'Electronics', price: 100, images: 'img.jpg', cantidad: 3 },
      { id: 2, title: 'Producto 2', description: 'Descripción', category: 'Electronics', price: 50, images: 'img2.jpg', cantidad: 1 },
    ]);
  });

  it('debería decrementar la cantidad de un producto', () => {
    (decrementarCantidad as jest.Mock).mockReturnValue([
      { id: 1, title: 'Producto 1', description: 'Descripción', category: 'Electronics', price: 100, images: 'img.jpg', cantidad: 1 },
      { id: 2, title: 'Producto 2', description: 'Descripción', category: 'Electronics', price: 50, images: 'img2.jpg', cantidad: 1 },
    ]);

    const { result } = renderHook(() => useCarItem(productosMock));

    act(() => {
      result.current.handleDecrementar(1);
    });

    expect(decrementarCantidad).toHaveBeenCalledWith(productosMock, 1);
    expect(mockSetCarrito).toHaveBeenCalledWith([
      { id: 1, title: 'Producto 1', description: 'Descripción', category: 'Electronics', price: 100, images: 'img.jpg', cantidad: 1 },
      { id: 2, title: 'Producto 2', description: 'Descripción', category: 'Electronics', price: 50, images: 'img2.jpg', cantidad: 1 },
    ]);
  });

  it('debería eliminar un producto del carrito', () => {
    const { result } = renderHook(() => useCarItem(productosMock));

    act(() => {
      result.current.handleEliminarProducto(1);
    });

    expect(mockEliminarDelCarrito).toHaveBeenCalledWith(1);
  });

  it('debería calcular el total correctamente', () => {
    const { result } = renderHook(() => useCarItem(productosMock));

    expect(result.current.total).toBe(250);
    expect(calcularTotal).toHaveBeenCalledWith(productosMock);
  });
});
