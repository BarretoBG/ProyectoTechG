import styled from 'styled-components';

export const ContenedorCategoria = styled.section`
  display: flex;
  margin: 5px 0px 0px 20px;
  flex-direction: column;
  font-family: Onest;
  width: 180px;
  grid-area: categoria;
`;

export const CategoriaTitulo = styled.h2`
  font-size: 18px;
  background-color: #00a473;
  padding: 15px;
  color: white;
  letter-spacing: 1px;
  font-weight: 100;
`;

export const NombreCategorias = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  
  & h3 {
    font-size: 20px;
    color: #00a473;
  }
`;

export const CategoriaLista = styled.ul`
  padding: 1px 0px 1px 30px;
  margin: -10px;

  & li {
  list-style: none;
  }
`;

export const CategoriaEnlace = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: #5e6061;
  text-transform: uppercase; 

  &:hover {
    color: #607d8b;
  }
`;

const CategoriaStyled = {
  ContenedorCategoria,
  CategoriaTitulo,
  NombreCategorias,
  CategoriaLista,
  CategoriaEnlace,
};

export default CategoriaStyled;
