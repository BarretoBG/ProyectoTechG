import { FC } from "react";
import { Link } from "react-router-dom";
import HeaderStyled from './Header.styled';
import { ModuleRoutes } from "../../proxy/router";
import { useCart } from "../../context/CartContext"; 

interface HeaderProps {
  setBusqueda: (busqueda: string) => void;
}

const { NumeroItem, HeaderWrapper, HeaderLink, Centro, InputBusqueda, ButtonBusqueda, Usuario,
  Logo, LogoLetra, LogoDibujo, Carrito, User, Menu, MenuImg } = HeaderStyled;

const Header: FC<HeaderProps> = ({ setBusqueda }) => {
  const { carrito } = useCart();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(event.target.value);
  };

  const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

  return (
    <HeaderWrapper>
      <Menu>
        <MenuImg src="../../assets/images/menu.png" alt="Menu" />
      </Menu>
      <Logo>
        <HeaderLink>
          <LogoDibujo src="src/assets/images/logo1.png" alt="Logo" />
        </HeaderLink>
        <HeaderLink href="index.html">
          <LogoLetra src="src/assets/images/logo.png" alt="Logo Text" />
        </HeaderLink>
      </Logo>
      <Centro>
        <InputBusqueda 
          type="text" 
          id="input-busqueda" 
          placeholder="Buscar productos..." 
          onChange={handleSearchChange} // Llamamos a la función que actualiza la búsqueda
        />
        <ButtonBusqueda>Buscar</ButtonBusqueda>
      </Centro>
      <Usuario>
        <Link to={ModuleRoutes.CarResume} style={{ textDecoration: 'none' }}>
          <Carrito src="src/assets/images/carrito.png" alt="Carrito" />
          <NumeroItem>{totalProductos}</NumeroItem>
        </Link>
        <HeaderLink href="login.html">
          <User src="src/assets/images/user.png" alt="Usuario" />
        </HeaderLink>
      </Usuario>
    </HeaderWrapper>
  );
};

export default Header;
