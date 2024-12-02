import styled from 'styled-components';

const LoginContainer = styled.div`
  font-family: 'Onest', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const BannerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormularioContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Espaciado interno general */
  box-sizing: border-box; /* Para que el padding no afecte el ancho total */
`;

const LoginStyled = {
  LoginContainer,
  BannerContainer,
  FormularioContainer,
};

export default LoginStyled;
