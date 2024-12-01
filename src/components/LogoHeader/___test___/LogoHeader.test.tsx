import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogoHeader } from '../LogoHeader';
import { ModuleRoutes } from '../../../proxy/router';

describe('LogoHeader', () => {
  it('debería renderizar correctamente el logo y los enlaces', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <LogoHeader />
      </BrowserRouter>
    );

    const logoDibujo = getByAltText('Logo');
    const logoLetra = getByAltText('Logo Text');

    expect(logoDibujo).toBeInTheDocument();
    expect(logoLetra).toBeInTheDocument();
    expect(logoDibujo).toHaveAttribute('src', 'src/assets/images/logo1.png');
    expect(logoLetra).toHaveAttribute('src', 'src/assets/images/logo.png');
    expect(logoDibujo.closest('a')).toHaveAttribute('href', ModuleRoutes.Init);
    expect(logoLetra.closest('a')).toHaveAttribute('href', ModuleRoutes.Init);
  });
});
