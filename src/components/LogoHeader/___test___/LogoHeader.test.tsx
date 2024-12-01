import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogoHeader } from '../LogoHeader';
import { ModuleRoutes } from '../../../proxy/router';

describe('LogoHeader', () => {
    it('debería renderizar correctamente el logo y los enlaces', () => {
        // Renderizar el componente dentro de un Router (necesario para usar <Link>)
        const { getByAltText } = render(
            <BrowserRouter>
                <LogoHeader />
            </BrowserRouter>
        );

        // Verificar que se rendericen correctamente las imágenes con los textos alternativos
        const logoDibujo = getByAltText('Logo');
        const logoLetra = getByAltText('Logo Text');

        expect(logoDibujo).toBeInTheDocument();
        expect(logoLetra).toBeInTheDocument();

        // Verificar que los src de las imágenes sean correctos
        expect(logoDibujo).toHaveAttribute('src', 'src/assets/images/logo1.png');
        expect(logoLetra).toHaveAttribute('src', 'src/assets/images/logo.png');

        // Verificar que los enlaces apunten a la ruta inicial
        expect(logoDibujo.closest('a')).toHaveAttribute('href', ModuleRoutes.Init);
        expect(logoLetra.closest('a')).toHaveAttribute('href', ModuleRoutes.Init);
    });
});
