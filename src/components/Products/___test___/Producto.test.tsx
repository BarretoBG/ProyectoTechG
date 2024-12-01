import { render, screen, fireEvent } from '@testing-library/react';
import Products from '../Products';
import { Product } from '../../../interfaces/producto';

//MOKS USADAS
const productosMock: Product[] = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    category: 'Categoría 1',
    price: 100,
    images: 'h',
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    category: 'Categoría 2',
    price: 200,
    images: 'h',
  },
];

const mockOnAddToCart = jest.fn();
//------------------------------------------------

describe('Products Component', () => {
  test('Debería renderizar los productos correctamente', () => {
    render(<Products productos={productosMock} onAddToCart={mockOnAddToCart} />);

    productosMock.forEach((producto) => {
      expect(screen.getByText(producto.title)).toBeInTheDocument();
      expect(screen.getByText(`Precio: S/.${producto.price}`)).toBeInTheDocument();
    });
  });

  test('Debería llamar a onAddToCart cuando se haga clic en el botón "Añadir al carrito"', () => {
    render(<Products productos={productosMock} onAddToCart={mockOnAddToCart} />);

    const buttons = screen.getAllByText('Añadir al carrito');

    fireEvent.click(buttons[0]);

    expect(mockOnAddToCart).toHaveBeenCalledWith(productosMock[0]);
  });

  test('Debería mostrar un mensaje cuando no haya productos disponibles', () => {
    render(<Products productos={[]} onAddToCart={mockOnAddToCart} />);
    expect(screen.getByText('No hay productos disponibles.')).toBeInTheDocument();
  });
});
