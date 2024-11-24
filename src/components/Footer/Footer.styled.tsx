import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 40px 20px;
`;

export const ContenedorFooterFirst = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  width: 45%;
`;

export const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
`;

export const Hr = styled.hr`
  border: 0.5px solid #607d8b;
  margin: 10px 0;
`;

export const ContenedorFooterSecond = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContenedorInformes = styled.div`
  width: 45%;
`;

export const ContenedorReclamos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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