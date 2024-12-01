import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

describe('SearchBar Component', () => {
  it('debería llamar a setBusqueda con un valor vacío cuando se borra el campo', () => {
    const mockSetBusqueda = jest.fn();

    render(<SearchBar setBusqueda={mockSetBusqueda} />);

    fireEvent.change(screen.getByPlaceholderText('Buscar productos...'), {
      target: { value: 'Producto de prueba' },
    });

    fireEvent.change(screen.getByPlaceholderText('Buscar productos...'), {
      target: { value: '' },
    });
    
    expect(mockSetBusqueda).toHaveBeenCalledWith('');
  });
});
