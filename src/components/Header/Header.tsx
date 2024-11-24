import { FC } from "react";
import HeaderStyled from './Header.styled';

  const { HeaderWrapper, HeaderLink, Centro, InputBusqueda, ButtonBusqueda, Usuario,
    Logo, LogoLetra, LogoDibujo, Carrito, User, Menu, MenuImg } = HeaderStyled;

const Header: FC = () => {
    return (
      <HeaderWrapper>
        <Menu>
          <MenuImg src="../../assets/images/menu.png" alt="Menu" />
        </Menu>
        <Logo>
          <HeaderLink href="index.html">
            <LogoDibujo src="src/assets/images/logo1.png" alt="Logo" />
          </HeaderLink>
          <HeaderLink href="index.html">
            <LogoLetra src="src/assets/images/logo.png" alt="Logo Text" />
          </HeaderLink>
        </Logo>
        <Centro>
          <InputBusqueda type="text" id="input-busqueda" />
          <ButtonBusqueda>Buscar</ButtonBusqueda>
        </Centro>
        <Usuario>
          <HeaderLink id="carrito">
            <Carrito src="src/assets/images/carrito.png" alt="Carrito" />
          </HeaderLink>
          <HeaderLink href="login.html">
            <User src="src/assets/images/user.png" alt="Usuario" />
          </HeaderLink>
        </Usuario>
      </HeaderWrapper>
    );
  };
  
  export default Header;