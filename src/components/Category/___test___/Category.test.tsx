import { render, screen, fireEvent } from '@testing-library/react';
import Category from '../Category';
import { Grupos } from '../../../interfaces/producto';

// Mock de datos para las categorías
const mockCategorias: Grupos = {
  'Electrónica': ['Celulares', 'Laptops', 'Televisores'],
  'Ropa': ['Camisetas', 'Pantalones', 'Chaquetas'],
};

describe('Category Component', () => {
  it('debería renderizar correctamente las categorías', () => {
    render(<Category categorias={mockCategorias} onCategoryClick={() => {}} />);

    // Verificar que las categorías aparecen en el documento
    expect(screen.getByText('CATEGORÍAS')).toBeInTheDocument();
    expect(screen.getByText('Todo')).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();

    // Verificar las categorías por grupo
    expect(screen.getByText('Electrónica')).toBeInTheDocument();
    expect(screen.getByText('Ropa')).toBeInTheDocument();

    // Verificar las subcategorías
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

    // Simular clic en una categoría
    fireEvent.click(screen.getByText('Celulares'));

    // Verificar que la función onCategoryClick fue llamada con el valor correcto
    expect(mockOnCategoryClick).toHaveBeenCalledWith('Celulares');
  });

  it('debería llamar a onCategoryClick con un string vacío cuando se hace clic en "Todos los productos"', () => {
    const mockOnCategoryClick = jest.fn();

    render(<Category categorias={mockCategorias} onCategoryClick={mockOnCategoryClick} />);

    // Simular clic en "Todos los productos"
    fireEvent.click(screen.getByText('Todos los productos'));

    // Verificar que la función onCategoryClick fue llamada con un string vacío
    expect(mockOnCategoryClick).toHaveBeenCalledWith('');
  });
});
