// no hay test
import { FC, useState } from 'react';
import Header from "../../components/HeaderPrincipal/HeaderPrincipal";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/Category/Category";
import { Product } from '../../interfaces/producto';
import Products from '../../components/Products/Products';
import { useCart } from '../../context/CartContext';
import { agregarAlCarrito } from '../../services/cartService/cartService';
import { grupos } from '../../interfaces/categories';
import { useProductos } from '../../hooks/useProducts';
import usePaginacion from '../../hooks/usePaginacion';
import HomeStyled from './Home.styled';
import withAuth from '../../HOC/userHOC';
import Mensaje from "../../components/Mensaje/Mensaje";

const { Layout, ContenedorMensaje, PaginacionContenedor, PaginacionBoton } = HomeStyled;

const Home: FC = () => {
  const [busqueda, setBusqueda] = useState<string>(''); 
  const [categoria, setCategoria] = useState<string>('');
  const { carrito, setCarrito } = useCart();

  const { productosFiltrados, cargando } = useProductos(busqueda, categoria);
  const { cantItems, nextPage, prevPage, paginas, setpaginas, totalPaginas } = usePaginacion(6, productosFiltrados);
  
  const handleCategoryClick = (categoria: string) => {
    setpaginas(1);
    setCategoria(categoria); 
  };

  const handleAddToCart = (producto: Product) => {
    const productoConCantidad = { ...producto, cantidad: 1 };
    agregarAlCarrito(productoConCantidad, carrito, setCarrito);
  };

  return (
    <Layout>
      <ContenedorMensaje>
        <Mensaje />
      </ContenedorMensaje>
      <Header setBusqueda={setBusqueda} />
      <Category categorias={grupos} onCategoryClick={handleCategoryClick} />
      
      {cargando ? <p>Cargando productos...</p> : (
        <>
          <Products productos={cantItems} onAddToCart={handleAddToCart} />
          
          <PaginacionContenedor>
            <PaginacionBoton onClick={prevPage} disabled={paginas === 1}>
              Anterior
            </PaginacionBoton>
            <span>Página {paginas} de {totalPaginas}</span>
            <PaginacionBoton onClick={nextPage} disabled={paginas === totalPaginas}>
              Siguiente
            </PaginacionBoton>
          </PaginacionContenedor>
        </>
      )}

      <Footer />
    </Layout>
  );
};

export default withAuth(Home);
