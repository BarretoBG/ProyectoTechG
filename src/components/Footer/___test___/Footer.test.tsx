import { render, screen } from '@testing-library/react';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta

describe('Footer Component', () => {
  it('debería renderizar los enlaces de redes sociales', () => {
    render(<Footer />);

    // Verificar que los enlaces de redes sociales estén presentes
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument();
  });

  it('debería renderizar las secciones de "GENERAL" y "LEGAL"', () => {
    render(<Footer />);

    // Verificar que las secciones de "GENERAL" y "LEGAL" estén presentes
    expect(screen.getByText(/GENERAL/i)).toBeInTheDocument();
    expect(screen.getByText(/LEGAL/i)).toBeInTheDocument();

    // Verificar que los enlaces dentro de esas secciones estén presentes
    expect(screen.getByText(/sobre nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/contacto/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de compra/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de garantía/i)).toBeInTheDocument();
    expect(screen.getByText(/términos y condiciones de delivery/i)).toBeInTheDocument();
  });

  it('debería renderizar la sección de "LIBRO DE RECLAMACIONES"', () => {
    render(<Footer />);

    // Verificar que la sección "LIBRO DE RECLAMACIONES" esté presente
    expect(screen.getByText(/libro de reclamaciones/i)).toBeInTheDocument();

    // Verificar que la imagen del libro de reclamos esté presente
    expect(screen.getByAltText(/libro de reclamaciones/i)).toBeInTheDocument();
  });

  it('debería renderizar el texto de derechos reservados y la ubicación', () => {
    render(<Footer />);

    // Verificar que el texto de derechos reservados esté presente
    expect(screen.getByText(/todos los derechos reservados 2024 \/ grupo organic sac/i)).toBeInTheDocument();
    expect(screen.getByText(/colombia \| perú \| chile/i)).toBeInTheDocument();

    // Verificar la ubicación de la sede
    expect(screen.getByText(/av\. el sol s\/n, san juan de lurigancho - lima, perú/i)).toBeInTheDocument();
  });
});
