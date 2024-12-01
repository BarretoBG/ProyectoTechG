import { render, screen, fireEvent } from '@testing-library/react';
import Category from '../Category';
import { Grupos } from '../../../interfaces/producto';

// MOKCS USADAS
const mockCategorias: Grupos = {
  'Electrónica': ['Celulares', 'Laptops', 'Televisores'],
  'Ropa': ['Camisetas', 'Pantalones', 'Chaquetas'],
};
//---------------------------------------------------------

describe('Category Component', () => {
  it('debería renderizar correctamente las categorías', () => {
    render(<Category categorias={mockCategorias} onCategoryClick={() => {}} />);

    expect(screen.getByText('CATEGORÍAS')).toBeInTheDocument();
    expect(screen.getByText('Todo')).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();
    expect(screen.getByText('Electrónica')).toBeInTheDocument();
    expect(screen.getByText('Ropa')).toBeInTheDocument();

    expect(screen.getByText('Celulares')).toBeInTheDocument();
    expect(screen.getByText('Laptops')).toBeInTheDocument();
    expect(screen.getByText('Televisores')).toBeInTheDocument();
    expect(screen.getByText('Camisetas')).toBeInTheDocument();
    expect(screen.getByText('Pantalones')).toBeInTheDocument();
    expect(screen.getByText('Chaquetas')).toBeInTheDocument();
  });

  it('debería llamar a onCategoryClick cuando se hace clic en una categoría', () => {
    const mockOnCategoryClick = jest.fn();

    render(<Category categorias={mockCategorias} onCategoryClick={mockOnCategoryClick} />);

    fireEvent.click(screen.getByText('Celulares'));
    expect(mockOnCategoryClick).toHaveBeenCalledWith('Celulares');
  });

  it('debería llamar a onCategoryClick con un string vacío cuando se hace clic en "Todos los productos"', () => {
    const mockOnCategoryClick = jest.fn();

    render(<Category categorias={mockCategorias} onCategoryClick={mockOnCategoryClick} />);
    fireEvent.click(screen.getByText('Todos los productos'));
    expect(mockOnCategoryClick).toHaveBeenCalledWith('');
  });
});
