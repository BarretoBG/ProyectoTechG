import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CarItem from '../CarItem';
import { CarritoProduct } from '../../../interfaces/CarritoProduct';

// Mock de productos para la prueba
const mockProductos: CarritoProduct[] = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    category: 'Categoría 1',
    price: 20.22,
    images: 'image1.jpg',
    cantidad: 2,
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    category: 'Categoría 2',
    price: 30.0,
    images: 'image2.jpg',
    cantidad: 1,
  },
];

// Mock del hook `useCarItem`
jest.mock('../../../hooks/useCart', () => {
  const mockHandleIncrementar = jest.fn();
  const mockHandleDecrementar = jest.fn();
  const mockHandleEliminarProducto = jest.fn();

  return {
    useCarItem: () => ({
      handleIncrementar: mockHandleIncrementar,
      handleDecrementar: mockHandleDecrementar,
      handleEliminarProducto: mockHandleEliminarProducto,
      total: 70.44, // Total calculado para la prueba
    }),
  };
});

describe('CarItem Component', () => {
  it('debería renderizar los productos correctamente', () => {
    render(<CarItem productos={mockProductos} />);

    // Verificar que los productos aparecen en el documento
    mockProductos.forEach((producto) => {
      expect(screen.getByText(producto.title)).toBeInTheDocument();
      expect(screen.getByText(producto.cantidad)).toBeInTheDocument();
    });

    // Verificar el total
    expect(screen.getByText('Total a pagar: S/ 70.44')).toBeInTheDocument();
  });

  it('debería manejar el incremento de cantidad', () => {
    const { handleIncrementar: mockHandleIncrementar } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    // Simular clic en el botón de incrementar
    const botonesIncrementar = screen.getAllByRole('button', { name: '+' });
    fireEvent.click(botonesIncrementar[0]);

    // Verificar que el mock fue llamado con el ID correcto
    expect(mockHandleIncrementar).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleIncrementar).toHaveBeenCalledTimes(1);
  });

  it('debería manejar el decremento de cantidad', () => {
    const { handleDecrementar: mockHandleDecrementar } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    // Simular clic en el botón de decrementar
    const botonesDecrementar = screen.getAllByRole('button', { name: '-' });
    fireEvent.click(botonesDecrementar[0]);

    // Verificar que el mock fue llamado con el ID correcto
    expect(mockHandleDecrementar).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleDecrementar).toHaveBeenCalledTimes(1);
  });

  it('debería manejar la eliminación del producto', () => {
    const { handleEliminarProducto: mockHandleEliminarProducto } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    // Simular clic en el botón de eliminar
    const botonesEliminar = screen.getAllByRole('button', { name: 'Eliminar' });
    fireEvent.click(botonesEliminar[0]);

    // Verificar que el mock fue llamado con el ID correcto
    expect(mockHandleEliminarProducto).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleEliminarProducto).toHaveBeenCalledTimes(1);
  });
});