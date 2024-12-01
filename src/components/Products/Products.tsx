import { FC } from 'react';
import ProductoStyled from './Producto.styled';
import { Product } from '../../interfaces/producto';

const { ContenedorPrincipal, ConjuntoItems, Item, ItemImg, ItemTitulo, ItemSubtitulo, ItemBoton } = ProductoStyled;

interface ProductsProps {
  productos: Product[];
  onAddToCart: (producto: Product) => void;
}

const Products: FC<ProductsProps> = ({ productos, onAddToCart }) => {
  return (
    <ContenedorPrincipal>
      {productos.length > 0 ? (
        <ConjuntoItems>
          {productos.map((producto) => (
            <Item key={producto.id}>
              <ItemImg src={producto.images[0]} alt={producto.title} />
              <ItemTitulo>{producto.category} </ItemTitulo>
              <ItemSubtitulo>{producto.title}</ItemSubtitulo>
              <ItemSubtitulo>Precio: S/.{producto.price}</ItemSubtitulo>
              <ItemBoton onClick={() => onAddToCart(producto)}>Añadir al carrito</ItemBoton>
            </Item>
          ))}
        </ConjuntoItems>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </ContenedorPrincipal>
  );
};

export default Products;
