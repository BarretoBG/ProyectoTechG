import { FC } from "react";
import { Link } from "react-router-dom";
import HeaderStyled from '../HeaderPrincipal/Header.styled';
import { useCart } from "../../context/CartContext";
import { ModuleRoutes } from "../../proxy/router";

const { Usuario, Carrito, NumeroItem, User } = HeaderStyled;

export const UserActions: FC = () => {
  const { carrito } = useCart();
  const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

  return (
    <Usuario>
      <Link to={ModuleRoutes.CartResume} style={{ textDecoration: 'none' }}>
        <Carrito src="src/assets/images/carrito.png" alt="Carrito" />
        <NumeroItem>{totalProductos}</NumeroItem>
      </Link>
        <User src="src/assets/images/user.png" alt="Usuario" />
    </Usuario>
  );
};
