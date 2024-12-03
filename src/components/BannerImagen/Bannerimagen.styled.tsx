import styled from "styled-components";

const ImagenContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100vh;
`;

const ImagenBefore = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(255deg, #b55802, #05b580);
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