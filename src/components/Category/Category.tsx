import { FC } from 'react';
import { Grupos } from '../../interfaces/producto';
import CategoriaStyled from './Category.styled';

interface CategoriaProps {
  categorias: Grupos;
  onCategoryClick: (categoria: string) => void;
}

const { CategoriaLista, NombreCategorias, CategoriaEnlace, CategoriaTitulo, ContenedorCategoria} = CategoriaStyled;

const Category: FC<CategoriaProps> = ({ categorias, onCategoryClick }) => {
  return (
    <ContenedorCategoria>
      <CategoriaTitulo>CATEGORÍAS</CategoriaTitulo>
      <NombreCategorias>
        <h3>All</h3>
        <CategoriaLista>
          <li>
            <CategoriaEnlace 
              href="#!" 
              onClick={() => onCategoryClick('')}
            >
              Todos los productos
            </CategoriaEnlace>
          </li>
        </CategoriaLista>

        {/* Renderizamos las categorías por grupo */}
        {Object.keys(categorias).map((grupo) => (
          <div key={grupo}>
            <h3>{grupo}</h3>
            <CategoriaLista>
              {categorias[grupo].map((categoria) => (
                <li key={categoria}>
                  <CategoriaEnlace 
                    href="#!" 
                    onClick={() => onCategoryClick(categoria)}
                  >
                    {categoria}
                  </CategoriaEnlace>
                </li>
              ))}
            </CategoriaLista>
          </div>
        ))}
      </NombreCategorias>
    </ContenedorCategoria>
  );
};


export default Category;
