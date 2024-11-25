import React, { FC, useState } from "react";
import ResumenStyled from "./Resumen.styled";

const { Formulario, Campo, Error, Boton, Select } = ResumenStyled;

interface ResumenProps {
  carrito: any[];
  onSubmit: (datosFormulario: Record<string, string>) => void;
}

const Resumen: FC<ResumenProps> = ({ carrito, onSubmit }) => {
  const [formulario, setFormulario] = useState({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });

  const [errores, setErrores] = useState({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });

  const validarCampo = (campo: string, valor: string): string => {
    if (!valor) return "Campo obligatorio";

    switch (campo) {
      case "nombres":
      case "apellidos":
        if (!/^[a-zA-Z\s]+$/.test(valor)) return "Debe ingresar un valor válido";
        break;
      case "celular":
        if (!/^\d{9}$/.test(valor)) return "Debe ingresar un número válido de 9 dígitos";
        break;
      default:
        break;
    }

    return "";
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
    setErrores({ ...errores, [name]: validarCampo(name, value) });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevosErrores = Object.keys(formulario).reduce((acc, campo) => {
      acc[campo as keyof typeof errores] = validarCampo(campo, formulario[campo as keyof typeof formulario]);
      return acc;
    }, {} as typeof errores);

    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some((error) => error !== "");
    if (hayErrores) return;

    onSubmit(formulario); 
  };

  return (
    <Formulario onSubmit={manejarEnvio}>
      <h2>Formulario de Envío</h2>
      <Campo>
        <label htmlFor="nombres">Nombres</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formulario.nombres}
          onChange={manejarCambio}
        />
        {errores.nombres && <Error>{errores.nombres}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={formulario.apellidos}
          onChange={manejarCambio}
        />
        {errores.apellidos && <Error>{errores.apellidos}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="distrito">Distrito</label>
        <Select
          id="distrito"
          name="distrito"
          value={formulario.distrito}
          onChange={manejarCambio}
        >
          <option value="">Seleccione un distrito</option>
          <option value="Miraflores">Miraflores</option>
          <option value="San Isidro">San Isidro</option>
          <option value="Surco">Surco</option>
          <option value="Barranco">Barranco</option>
          <option value="La Molina">La Molina</option>
        </Select>
        {errores.distrito && <Error>{errores.distrito}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formulario.direccion}
          onChange={manejarCambio}
        />
        {errores.direccion && <Error>{errores.direccion}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="referencia">Referencia</label>
        <input
          type="text"
          id="referencia"
          name="referencia"
          value={formulario.referencia}
          onChange={manejarCambio}
        />
        {errores.referencia && <Error>{errores.referencia}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="celular">Celular</label>
        <input
          type="text"
          id="celular"
          name="celular"
          value={formulario.celular}
          onChange={manejarCambio}
        />
        {errores.celular && <Error>{errores.celular}</Error>}
      </Campo>

      <Boton type="submit">Comprar</Boton>
    </Formulario>
  );
};

export default Resumen;
