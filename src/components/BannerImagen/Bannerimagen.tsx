import React from 'react';
import BannerImagenStyled from './Bannerimagen.styled';

const { ImagenContainer, ImagenBefore, ImagenImg } = BannerImagenStyled;

const BannerImagen = () => (
  <ImagenContainer>
    <ImagenBefore />
    <ImagenImg src="images/login.jpg" alt="Login" />
  </ImagenContainer>
);

export default BannerImagen;
