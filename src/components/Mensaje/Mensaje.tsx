import { FC, useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import MensajeStyled from "./Mensaje.styled";

const { Contenedor } = MensajeStyled;

const Mensaje: FC = () => {
  const { user } = useUser();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (user && !localStorage.getItem("welcomeMessageShown")) {
      setShowMessage(true); // Mostrar el mensaje
      localStorage.setItem("welcomeMessageShown", "true");
    }
  }, [user]); // Se ejecuta cada vez que el usuario cambia

  if (!showMessage || !user) return null;

  return (
    <Contenedor>
      Bienvenido(a), {user.firstName} {user.lastName}
    </Contenedor>
  );
};

export default Mensaje;
