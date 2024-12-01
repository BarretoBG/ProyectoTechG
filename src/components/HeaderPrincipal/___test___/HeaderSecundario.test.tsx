import { render, screen } from '@testing-library/react';
import Header from '../HeaderSecundario';

// MOCKS USADAS
jest.mock('../../LogoHeader/LogoHeader', () => ({
    LogoHeader: () => <div data-testid="logo-header">LogoHeader</div>,
}));
jest.mock('../../User/User', () => ({
    UserActions: () => <div data-testid="user-actions">UserActions</div>,
}));
//----------------------------------------------------------------

describe('Header', () => {
    it('debería renderizar los componentes hijos correctamente', () => {
        render(<Header />);
        expect(screen.getByTestId('logo-header')).toBeInTheDocument();
        expect(screen.getByTestId('user-actions')).toBeInTheDocument();
    });
});
