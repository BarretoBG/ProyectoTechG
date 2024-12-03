import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "mensaje mensaje mensaje"
    "header header header"
    "categoria item item"
    "categoria item item"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 80px 500px auto;
  font-family: 'Onest', sans-serif;
  gap: 10px;
  height: 100vh;
`;

export const ContenedorMensaje = styled.div`
  grid-area: mensaje;
  background-color: #f0f8ff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const HomeStyled = {
  Layout,
  ContenedorMensaje,
};

export default HomeStyled;
