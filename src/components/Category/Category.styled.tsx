import styled from 'styled-components';

export const ContenedorCategoria = styled.section`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  font-family: Onest;
  width: 180px;
`;

export const CategoriaTitulo = styled.h2`
  font-size: 18px;
  margin: 20px 0px 20px 0px;
  background-color: #00a473;
  padding: 15px;
  color: white;
  letter-spacing: 1px;
  font-weight: 100;
`;

export const NombreCategorias = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoriaLista = styled.ul`
  padding: 1px 0px 1px 17px;
`;

export const CategoriaEnlace = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: #5e6061;
  text-transform: uppercase;  
  list-style: none;

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
