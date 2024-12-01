import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Onest', sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 20px 16px;
  background-color: white;
  grid-area: header;
  box-sizing: border-box;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoLetra = styled.img`
  width: 100px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const LogoDibujo = styled.img`
  width: 60px;
  height: auto;
`;

const Centro = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 600px;
  gap: 0;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const InputBusqueda = styled.input`
  flex: 1;
  padding: 10px;
  border: 0.4px solid #607d8b;
  border-right: none;
  letter-spacing: 1px;
  text-indent: 1em;
  color: #607d8b;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex: 2;
  }
`;

const ButtonBusqueda = styled.button`
  padding: 10px;
  color: white;
  border: 0.4px solid #607d8b;
  border-left: none;
  background: #00a473;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex: 1;
  }
`;

const Usuario = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const Carrito = styled.img`
  width: 30px;
  height: auto;
`;

const User = styled.img`
  width: 30px;
  height: auto;
`;

const NumeroItem = styled.span`
  color: white;
  background-color: #0da477;
  padding: 3px 7px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  margin-left: 5px;
`;

const HeaderStyled = {
  NumeroItem,
  HeaderWrapper,
  Centro,
  InputBusqueda,
  ButtonBusqueda,
  Usuario,
  Logo,
  LogoLetra,
  LogoDibujo,
  Carrito,
  User,
};

export default HeaderStyled;
