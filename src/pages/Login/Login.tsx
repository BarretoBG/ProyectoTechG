// falta test
// no hay ninguna validaci'on visible para el usuario si las credenciales son incorrectas
import { FC } from 'react';
import BannerImagen from '../../components/BannerImagen/Bannerimagen';
import Formulario from '../../components/Formulario/Formulario';
import LoginStyled from './Login.styled';

const { LoginContainer, BannerContainer, FormularioContainer, } = LoginStyled;

const Login: FC = () => {
  return (
    <LoginContainer>
      <BannerContainer> <BannerImagen /> </BannerContainer>
      <FormularioContainer> <Formulario /> </FormularioContainer>
    </LoginContainer>
  );
};

export default Login;
