import React from 'react';
import Input from './Input';
import Boton from './Boton';
import FormularioStyled from './Formulario.styled';

const { FormContainer, Titulo } = FormularioStyled;

const Formulario = () => (
  <FormContainer>
    <Titulo>INICIAR SESION</Titulo>
    <Input label="Usuario" type="text" name="user" />
    <Input label="Contraseña" type="password" name="contraseña" />
    <div style={{ fontSize: '14px' }}>
      <p>
        <a>¿Olvidaste tu contraseña?</a>
      </p>
    </div>
    <Boton />
  </FormContainer>
);

export default Formulario;

