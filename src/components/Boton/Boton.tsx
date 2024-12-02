import { FC } from 'react';
import BotonStyled from './Boton.styled';
import { ModuleRoutes } from "../../proxy/router";
import { Link } from "react-router-dom";

interface BotonProps {
  loading: boolean;
}

const { BotonesContainer, Button } = BotonStyled;

const Boton: FC<BotonProps> = ({ loading }) => (
  <BotonesContainer>
    <Button disabled={loading}>
      {loading ? 'Cargando...' : 'Enviar'}
    </Button>
    <Link to={ModuleRoutes.Init}>
      Volver a Inicio
    </Link>
  </BotonesContainer>
);

export default Boton;

