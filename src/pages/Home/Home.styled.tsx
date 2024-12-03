import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "mensaje mensaje mensaje"
    "header header header"
    "categoria item item"
    "categoria item item"
    "categoria item item"
    "paginacion paginacion paginacion"
    "footer footer footer"; 
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 80px 500px 50px auto; 
  font-family: 'Onest', sans-serif;
  gap: 10px;
  height: 100vh;
`;

const ContenedorMensaje = styled.div`
  grid-area: mensaje;
  background-color: #f0f8ff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const PaginacionContenedor = styled.div`
  grid-area: paginacion;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
`;

const PaginacionBoton = styled.button`
  padding: 10px;
  background-color: #00a473;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

const HomeStyled = {
  Layout,
  ContenedorMensaje,
  PaginacionContenedor,
  PaginacionBoton
};

export default HomeStyled;
