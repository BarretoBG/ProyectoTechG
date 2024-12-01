import React from 'react';
import InputStyled from './Input.styled';

const { Contenido, Label, InputField } = InputStyled;

const Input = ({ label, type, name }) => (
  <Contenido>
    <Label>{label}</Label>
    <InputField type={type} name={name} />
  </Contenido>
);

export default Input;

