import { useState } from "react";
import { formUser } from "../interfaces/formulario";
import { validarCampo } from "../utils/validaciones";
import { useCart } from "../context/CartContext";
import { ModuleRoutes } from "../proxy/router";
import { useNavigate } from "react-router-dom";

export const useFormulario = (onSubmit: (formUser: formUser) => void) => {
  const navigate = useNavigate();
  const { setCarrito } = useCart();
  
  const [formUser, setformUser] = useState<formUser>({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });

  const [errores, setErrores] = useState<formUser>({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });

  const distritos = ["San Borja", "San Isidro"];

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setformUser({ ...formUser, [name]: value });
    // No validamos aquí, solo actualizamos el valor
    setErrores({
      ...errores,
      [name]: "",  // Limpiamos el error cuando el usuario cambia el valor
    });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    // Validamos solo cuando el formulario es enviado
    const nuevosErrores = Object.keys(formUser).reduce((acc, campo) => {
      acc[campo as keyof formUser] = validarCampo(campo as "nombres" | "apellidos" | "celular", formUser[campo as keyof formUser]);
      return acc;
    }, {} as formUser);

    setErrores(nuevosErrores);

    // Verificamos si hay algún error
    const hayErrores = Object.values(nuevosErrores).some((error) => error !== "");
    if (hayErrores) return;

    // Si no hay errores, se llama al onSubmit
    onSubmit(formUser);
    setCarrito([]);  // Vaciar el carrito
    navigate(ModuleRoutes.Init);  // Redirigir
  };

  return {
    formUser,
    errores,
    distritos,
    manejarCambio,
    manejarEnvio,
  };
};
