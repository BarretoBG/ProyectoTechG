import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

describe('SearchBar Component', () => {
  it('debería llamar a setBusqueda con un valor vacío cuando se borra el campo', () => {
    const mockSetBusqueda = jest.fn();

    render(<SearchBar setBusqueda={mockSetBusqueda} />);

    // Simular un cambio con un valor
    fireEvent.change(screen.getByPlaceholderText('Buscar productos...'), {
      target: { value: 'Producto de prueba' },
    });

    // Simular que se borra el campo de búsqueda
    fireEvent.change(screen.getByPlaceholderText('Buscar productos...'), {
      target: { value: '' },
    });

    // Verificar que la función setBusqueda fue llamada con un valor vacío
    expect(mockSetBusqueda).toHaveBeenCalledWith('');
  });
});
