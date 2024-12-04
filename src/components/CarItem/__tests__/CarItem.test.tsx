import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CarItem from '../CarItem';
import { CarritoProduct } from '../../../interfaces/CarritoProduct';

// MOCKS DE PRUEBA
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

jest.mock('../../../hooks/useCart', () => {
  const mockHandleIncrementar = jest.fn();
  const mockHandleDecrementar = jest.fn();
  const mockHandleEliminarProducto = jest.fn();

  return {
    useCarItem: () => ({
      handleIncrementar: mockHandleIncrementar,
      handleDecrementar: mockHandleDecrementar,
      handleEliminarProducto: mockHandleEliminarProducto,
      total: 70.44, 
    }),
  };
});
//--------------------------------------------------------------

describe('CarItem Component', () => {
  it('debería renderizar los productos correctamente', () => {
    render(<CarItem productos={mockProductos} />);

    mockProductos.forEach((producto) => {
      expect(screen.getByText(producto.title)).toBeInTheDocument();
      expect(screen.getByText(producto.cantidad)).toBeInTheDocument();
    });
    expect(screen.getByText('Total a pagar: S/ 70.44')).toBeInTheDocument();
  });

  it('debería manejar el incremento de cantidad', () => {
    // usar jest.mock para evitar declararlo en cada test
    const { handleIncrementar: mockHandleIncrementar } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    const botonesIncrementar = screen.getAllByRole('button', { name: '+' });
    fireEvent.click(botonesIncrementar[0]);

    expect(mockHandleIncrementar).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleIncrementar).toHaveBeenCalledTimes(1);
  });

  it('debería manejar el decremento de cantidad', () => {
    const { handleDecrementar: mockHandleDecrementar } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    const botonesDecrementar = screen.getAllByRole('button', { name: '-' });
    fireEvent.click(botonesDecrementar[0]);

    expect(mockHandleDecrementar).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleDecrementar).toHaveBeenCalledTimes(1);
  });

  it('debería manejar la eliminación del producto', () => {
    const { handleEliminarProducto: mockHandleEliminarProducto } =
      require('../../../hooks/useCart').useCarItem();

    render(<CarItem productos={mockProductos} />);

    const botonesEliminar = screen.getAllByRole('button', { name: 'Eliminar' });
    fireEvent.click(botonesEliminar[0]);

    expect(mockHandleEliminarProducto).toHaveBeenCalledWith(mockProductos[0].id);
    expect(mockHandleEliminarProducto).toHaveBeenCalledTimes(1);
  });
});