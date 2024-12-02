import React, { FC } from 'react';
import FormularioStyled from './Formulario.styled';
import Input from '../Input/Input';
import Boton from '../Boton/Boton';
import { useLogin } from '../../hooks/useLogin';
import Modal from '../Modal/Modal'; // Importamos el componente del modal

const { FormContainer, Titulo } = FormularioStyled;

const Formulario: FC = () => {

  const {
    email, password, errors, isModalOpen, loading, setEmail, setPassword, handleSubmit, openModal, closeModal,
  } = useLogin();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Titulo>INICIAR SESION</Titulo>
      {/* Campo de email */}
      <Input
        label="Usuario"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email} // Muestra el error si existe
      />
      {/* Campo de contraseña */}
      <Input
        label="Contraseña"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password} // Muestra el error si existe
      />
      {/* Mostrar mensaje de error del servidor, si hay */}
      {errors.api && <div style={{ color: 'red', marginTop: '10px' }}>{errors.api}</div>}
      
      {/* Enlace para abrir el modal */}
      <a onClick={openModal}>Olvidé mi contraseña</a>
      
      {/* Botón de enviar */}
      <Boton loading={loading} />

      {/* Modal de "Olvidé mi contraseña" */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </FormContainer>
  );
};

export default Formulario;
