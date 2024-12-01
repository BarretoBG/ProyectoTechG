import styled from "styled-components";

const ImagenContainer = styled.div`
  position: relative;
  width: 50%;
`;

const ImagenBefore = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(255deg, #b55802, #05b580);
  z-index: 1;
  mix-blend-mode: screen;
`;

const ImagenImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerImagenStyled = {
    ImagenContainer,
    ImagenBefore,
    ImagenImg
  };
  
export default BannerImagenStyled;