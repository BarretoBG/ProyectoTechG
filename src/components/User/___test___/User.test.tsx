import { render, screen } from '@testing-library/react';
import { UserActions } from '../User';
import { CartContext } from '../../../context/CartContext';  // Importa el CartContext
import { BrowserRouter } from 'react-router-dom';

// Datos de prueba para el carrito
const carritoMock = [
  { id: 1, title: 'Producto 1', price: 10, description: '', category: '', images: '', cantidad: 2 },
  { id: 2, title: 'Producto 2', price: 20, description: '', category: '', images: '', cantidad: 3 },
];

describe('UserActions Component', () => {
  it('debería mostrar el carrito con la cantidad total de productos', () => {
    // Renderizamos el componente con el contexto simulado
    render(
      <CartContext.Provider value={{ carrito: carritoMock, setCarrito: jest.fn(), limpiarCarrito: jest.fn(), eliminarDelCarrito: jest.fn() }}>
        <BrowserRouter>
          <UserActions />
        </BrowserRouter>
      </CartContext.Provider>
    );

    // Verificamos que el número total de productos se muestre correctamente
    const numeroItem = screen.getByText('5'); // 2 + 3 productos
    expect(numeroItem).toBeInTheDocument();
  });

  it('debería mostrar el icono de carrito y el enlace al resumen del carrito', () => {
    render(
      <CartContext.Provider value={{ carrito: carritoMock, setCarrito: jest.fn(), limpiarCarrito: jest.fn(), eliminarDelCarrito: jest.fn() }}>
        <BrowserRouter>
          <UserActions />
        </BrowserRouter>
      </CartContext.Provider>
    );

    const carritoIcono = screen.getByAltText('Carrito');
    const linkCarrito = screen.getByRole('link', { name: /carrito/i });

    expect(carritoIcono).toBeInTheDocument();
    expect(linkCarrito).toHaveAttribute('href', '/CartResume'); // Asegúrate que sea el href correcto
  });

  it('debería mostrar el icono de usuario', () => {
    render(
      <CartContext.Provider value={{ carrito: carritoMock, setCarrito: jest.fn(), limpiarCarrito: jest.fn(), eliminarDelCarrito: jest.fn() }}>
        <BrowserRouter>
          <UserActions />
        </BrowserRouter>
      </CartContext.Provider>
    );

    const userIcon = screen.getByAltText('Usuario');
    expect(userIcon).toBeInTheDocument();
  });
});
