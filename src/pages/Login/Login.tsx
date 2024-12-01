import React from 'react';
import BannerImagen from '../../components/BannerImagen/Bannerimagen';
import Formulario from '../../components/Formulario/Formulario';
import LoginStyled from './Login.styled';

const { LoginContainer } = LoginStyled;

const Login = () => (
  <LoginContainer>
    <BannerImagen />
    <Formulario />
  </LoginContainer>
);

export default Login;
