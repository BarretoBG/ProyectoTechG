import React from 'react';
import BotonStyled from './Boton.Styled';

const { BotonesContainer, Button } = BotonStyled;

const Boton = () => (
  <BotonesContainer>
    <Button>Enviar</Button>
    <Link to={ModuleRoutes.Init}>
    Volver a Inicio
    </Link>
  </BotonesContainer>
);

export default Boton;
