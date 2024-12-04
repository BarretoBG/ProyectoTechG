// falta test
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
import HomeStyled from './Home.styled';

const { Layout } = HomeStyled;

const Home: FC = () => {
  const [busqueda, setBusqueda] = useState<string>(''); 
  const [categoria, setCategoria] = useState<string>('');
  const { carrito, setCarrito } = useCart();

  const { productosFiltrados, cargando } = useProductos(busqueda, categoria);

  const handleCategoryClick = (categoria: string) => {
    setCategoria(categoria); 
  };

  const handleAddToCart = (producto: Product) => {
    const productoConCantidad = { ...producto, cantidad: 1 };
    agregarAlCarrito(productoConCantidad, carrito, setCarrito);
  };

  return (
    <Layout>
      <Header setBusqueda={setBusqueda} />
      <Category categorias={grupos} onCategoryClick={handleCategoryClick} />
      {cargando ? <p>Cargando productos...</p> : (
        <Products productos={productosFiltrados} onAddToCart={handleAddToCart} />
      )}
      <Footer />
    </Layout>
  );
};

export default Home;
