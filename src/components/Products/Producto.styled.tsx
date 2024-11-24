import styled from 'styled-components';

export const ContenedorPrincipal = styled.section`
  box-sizing: border-box;
  font-family: Onest;
  grid-area: item;
`;

export const ConjuntoItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  flex: 0 0 calc(33.3% - 1rem);
  border: 1px solid #e1e1e1;
  padding: 10px 0px 30px 0px;
  border-radius: 5px;
  text-align: center;
  margin: 20px 0px;
`;

export const ItemImg = styled.img`
  display: block;
  margin: auto;
  width: 195px;
  height: 195px;
`;

export const ItemTitulo = styled.h3`
  font-size: 14px;
  border-bottom: 4px solid #d46e0f;
  display: inline-block;
  letter-spacing: 2px;
  margin: 20px 0px 10px 0px;
  text-transform: uppercase;
`;

export const ItemSubtitulo = styled.h2`
  font-size: 16px;
  margin: 10px 0px 20px 0px;
`;

export const ItemDescripcion = styled.p`
  font-size: 14px;
  margin: 10px 0px;
`;

export const ItemBoton = styled.button`
  width: 80%;
  padding: 10px 0px;
  outline: none;
  color: white;
  border: 0.4px solid #607d8b;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #ff8614, #05b580);
  cursor: pointer;
  border-radius: 30px;
`;

const ProductoStyled = {
  ContenedorPrincipal,
  ConjuntoItems,
  Item,
  ItemImg,
  ItemTitulo,
  ItemSubtitulo,
  ItemDescripcion,
  ItemBoton,
};

export default ProductoStyled;
