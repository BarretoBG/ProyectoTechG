import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: 'Onest', sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 20px 0px;
  background-color: white;
  grid-area: header;
`;

const HeaderLink = styled.a`
  padding: 0px 20px;
  text-decoration: none;
  color: #ffffff;
`;

const Centro = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 600px;
`;

const InputBusqueda = styled.input`
  width: 80%;
  padding: 10px 0px;
  border: 0.4px solid #607d8b;
  letter-spacing: 1px;
  text-indent: 2em;
  color: #607d8b;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const ButtonBusqueda = styled.button`
  width: 20%;
  padding: 10px 0px;
  outline: none;
  color: white;
  border: 0.4px solid #607d8b;
  letter-spacing: 1px;
  background: #00a473;
  cursor: pointer;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const Usuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-bottom: -10px;
`;

const LogoLetra = styled.img`
  margin-left: -30px;
  width: 100px;
`;

const LogoDibujo = styled.img`
  width: 60px;
  border: none;
`;

const Carrito = styled.img`
  width: 30px;
`;

const User = styled.img`
  width: 30px;
`;

const NumeroItem = styled.span`
  color: white;
  background-color: #0da477;
  padding: 3px 7px;
  border-radius: 15px;
  text-align: center;
`;

const Menu = styled.div`
  display: none;
`;

const MenuImg = styled.img`
  width: 0px;
`;

const HeaderStyled = {
    NumeroItem, HeaderWrapper, HeaderLink, Centro, InputBusqueda,
    ButtonBusqueda, Usuario, Logo, LogoLetra, LogoDibujo, Carrito,
    User, Menu, MenuImg
};

export default HeaderStyled;