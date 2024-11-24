import { FC } from 'react';
import ProductoStyled from './Producto.styled';

const { ContenedorPrincipal, ConjuntoItems, Item, ItemImg, ItemTitulo, ItemSubtitulo, ItemDescripcion, ItemBoton } = ProductoStyled;

const Producto: FC = () => {
  return (
    <ContenedorPrincipal>
      <ConjuntoItems id="conjunto-items">
      </ConjuntoItems>
    </ContenedorPrincipal>
  );
};

export default Producto;
