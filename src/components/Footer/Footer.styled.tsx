import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: black;
  padding: 40px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const ContenedorFooterFirst = styled.div`
  margin-bottom: 20px;
`;

export const Info = styled.div`
  flex: 0 0 calc(40% - 1rem);
`;

export const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;

export const Hr = styled.hr`
  border: 0.5px solid #607d8b;
  margin: 10px 0;
`;

export const ContenedorFooterSecond = styled.div`
  display: grid;
    grid-template-areas:
        "a a a"
        "b b b";
`;

export const ContenedorInformes = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: a;
`;

export const ContenedorReclamos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: b;
`;

export const ReclamosLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const ReclamosImg = styled.img`
  width: 100px;
`;

const FooterStyled = {
    FooterWrapper, ContenedorFooterFirst, Info, Redes, FooterLink, Hr,
    ContenedorFooterSecond, ContenedorInformes, ContenedorReclamos, ReclamosLink,
    ReclamosImg
};

export default FooterStyled;