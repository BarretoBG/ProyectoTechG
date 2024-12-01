import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('debe renderizar los enlaces de redes sociales', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument();
  });

  it('debe renderizar las secciones de "GENERAL" y "LEGAL"', () => {
    render(<Footer />);

    expect(screen.getByText(/GENERAL/i)).toBeInTheDocument();
    expect(screen.getByText(/LEGAL/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/contacto/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de compra/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de garantía/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de delivery/i)).toBeInTheDocument();
  });

  it('debe renderizar la sección de "LIBRO DE RECLAMACIONES"', () => {
    render(<Footer />);

    expect(screen.getByText(/libro de reclamaciones/i)).toBeInTheDocument();
    expect(screen.getByAltText(/libro de reclamaciones/i)).toBeInTheDocument();
  });

  it('debe renderizar el texto de derechos reservados y la ubicación', () => {
    render(<Footer />);

    expect(screen.getByText(/todos los derechos reservados 2024 \/ grupo organic sac/i)).toBeInTheDocument();
    expect(screen.getByText(/colombia \| perú \| chile/i)).toBeInTheDocument();
    expect(screen.getByText(/av\. el sol s\/n, san juan de lurigancho - lima, perú/i)).toBeInTheDocument();
  });
});
