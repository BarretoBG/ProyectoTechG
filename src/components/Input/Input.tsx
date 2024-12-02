import React, { FC } from 'react';
import InputStyled from './Input.styled';

const { Contenido, Label, InputField } = InputStyled;

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // Prop para mostrar el error
}

const Input: FC<InputProps> = ({ label, type, name, value, onChange, error }) => (
  <Contenido>
    <Label htmlFor={name}>{label}</Label>
    <InputField
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
    {error && <div style={{ color: 'red', marginTop: '5px' }}>{error}</div>}
  </Contenido>
);

export default Input;
