import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: black;
  padding: 40px;
  font-family: 'Onest';
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-area: footer;
`;

const ContenedorFooterFirst = styled.div`
  margin-bottom: 20px;
`;

const Info = styled.div`
  flex: 0 0 calc(40% - 1rem);
  font-size: 0.8rem;
`;

const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
`;

const Hr = styled.hr`
  border: 0.5px solid #607d8b;
  margin: 10px 0;
`;

const ContenedorFooterSecond = styled.div`
  grid-template-areas:
        "a a a"
        "b b b";
`;

const ContenedorInformes = styled.div`
  display: flex;
  justify-content: space-around;
  grid-area: a;
`;

const ContenedorReclamos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: b;
`;

const ReclamosLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
`;

const ReclamosImg = styled.img`
  width: 100px;
`;

const FooterStyled = {
    FooterWrapper, ContenedorFooterFirst, Info, Redes, FooterLink, Hr,
    ContenedorFooterSecond, ContenedorInformes, ContenedorReclamos, ReclamosLink,
    ReclamosImg
};

export default FooterStyled;