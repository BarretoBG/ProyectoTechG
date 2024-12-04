// falta test
import { FC } from "react";
import ResumenStyled from "./Resumen.styled";
import { ResumenProps } from "../../interfaces/formulario";
import { useFormulario } from "../../hooks/useFormulario";

const { Formulario, Campo, Error, Boton, Select } = ResumenStyled;

const Resumen: FC<ResumenProps> = ({ carrito, onSubmit }) => {
  const { formUser, errores, distritos, manejarCambio, manejarEnvio } = useFormulario(onSubmit);

  return (
    <Formulario onSubmit={manejarEnvio} role="form">
      <h2>Formulario de Envío</h2>
      <Campo>
        <label htmlFor="nombres">Nombres</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formUser.nombres}
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
          value={formUser.apellidos}
          onChange={manejarCambio}
        />
        {errores.apellidos && <Error>{errores.apellidos}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="distrito">Distrito</label>
        <Select
          id="distrito"
          name="distrito"
          value={formUser.distrito}
          onChange={manejarCambio}
        >
          <option value="">Seleccione un distrito</option>
          {distritos.map((distrito) => (
            <option key={distrito} value={distrito}>{distrito}</option>
          ))}
        </Select>
        {errores.distrito && <Error>{errores.distrito}</Error>}
      </Campo>

      <Campo>
        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formUser.direccion}
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
          value={formUser.referencia}
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
          value={formUser.celular}
          onChange={manejarCambio}
        />
        {errores.celular && <Error>{errores.celular}</Error>}
      </Campo>

      <Boton type="submit">Comprar</Boton>
    </Formulario>
  );
};

export default Resumen;