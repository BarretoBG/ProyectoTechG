import { FC } from 'react';
import CategoriaStyled from './Category.styled';
import { getAllCategories } from "../../ts/bussines/funcionalidades";

const { ContenedorCategoria, CategoriaTitulo, NombreCategorias, CategoriaLista, CategoriaEnlace } = CategoriaStyled;

const Categoria: FC = () => {
  return (
    <ContenedorCategoria>
      <CategoriaTitulo>CATEGORÍAS</CategoriaTitulo>
      <NombreCategorias id="nombre-categorias">
        </NombreCategorias>
    </ContenedorCategoria>
  );
};

export default Categoria;
