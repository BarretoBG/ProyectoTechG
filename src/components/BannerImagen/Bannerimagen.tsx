import { FC } from 'react';
import BannerImagenStyled from './Bannerimagen.styled';

const { ImagenContainer, ImagenBefore, ImagenImg } = BannerImagenStyled;

const BannerImagen: FC = () => (
  <ImagenContainer>
    <ImagenBefore />
    <ImagenImg src="src/assets/images/login.jpg" />
  </ImagenContainer>
);

export default BannerImagen;
