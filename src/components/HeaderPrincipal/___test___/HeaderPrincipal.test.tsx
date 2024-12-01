import { render, screen } from '@testing-library/react';
import Header from '../HeaderPrincipal';

// Mock de componentes hijos
jest.mock('../../LogoHeader/LogoHeader', () => ({
    LogoHeader: () => <div data-testid="logo-header">LogoHeader</div>,
}));
jest.mock('../../SearchBar/SearchBar', () => ({
    SearchBar: jest.fn(({ setBusqueda }: { setBusqueda: (busqueda: string) => void }) => (
        <div data-testid="search-bar">SearchBar</div>
    )),
}));
jest.mock('../../User/User', () => ({
    UserActions: () => <div data-testid="user-actions">UserActions</div>,
}));

import { SearchBar } from '../../SearchBar/SearchBar'; // Importar después de mockear

describe('Header', () => {
    it('debería renderizar los componentes hijos correctamente', () => {
        const mockSetBusqueda = jest.fn();

        render(<Header setBusqueda={mockSetBusqueda} />);

        // Verificar que los componentes hijos están en el documento
        expect(screen.getByTestId('logo-header')).toBeInTheDocument();
        expect(screen.getByTestId('search-bar')).toBeInTheDocument();
        expect(screen.getByTestId('user-actions')).toBeInTheDocument();
    });

    it('debería pasar la función setBusqueda correctamente a SearchBar', () => {
        const mockSetBusqueda = jest.fn();

        render(<Header setBusqueda={mockSetBusqueda} />);

        // Asegurar que el mock de SearchBar recibe el prop `setBusqueda`
        expect(SearchBar).toHaveBeenCalledWith(
            expect.objectContaining({ setBusqueda: mockSetBusqueda }),
            {}
        );
    });
});
