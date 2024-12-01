import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "categoria item item"
    "categoria item item"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 500px auto;
  font-family: 'Onest', sans-serif;
  gap: 10px;
  height: 100vh;
`;

const HomeStyled = {
  Layout,
};

export default HomeStyled;