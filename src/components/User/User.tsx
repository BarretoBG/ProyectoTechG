import { FC } from "react";
import { Link } from "react-router-dom";
import HeaderStyled from '../HeaderPrincipal/Header.styled';
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext"; // Importamos el contexto de usuario
import { ModuleRoutes } from "../../proxy/router";

const { Usuario, Carrito, NumeroItem, User } = HeaderStyled;

export const UserActions: FC = () => {
  const { carrito } = useCart();
  const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  
  const { user, logout } = useUser(); // Accedemos al contexto de usuario y logout

  return (
    <Usuario>
      <Link to={ModuleRoutes.CartResume} style={{ textDecoration: 'none' }}>
        <Carrito src="src/assets/images/carrito.png" alt="Carrito" />
        <NumeroItem>{totalProductos}</NumeroItem>
      </Link>

      {user ? (
        <>
          <span>Hola, {user.firstName}</span>
          <User src="src/assets/images/logout.jpg" alt="Logout" onClick={logout} />
        </>
      ) : (
        <Link to={ModuleRoutes.Login} style={{ textDecoration: 'none' }}>
          <User src="src/assets/images/user.png" alt="Usuario" />
        </Link>
      )}
    </Usuario>
  );
};
