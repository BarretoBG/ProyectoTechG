import React from 'react';
import Input from './Input';
import Boton from './Boton';
import FormularioStyled from './Formulario.styled';

const { FormContainer, Titulo } = FormularioStyled;

const Formulario = () => (
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  <FormContainer>
    <Titulo>INICIAR SESION</Titulo>
    <Input label="Usuario" type="text" name="user" />
    <Input label="Contraseña" type="password" name="contraseña" />
    <ForgotPasswordLink onClick={openModal}>Olvidé Contraseña</ForgotPasswordLink>
    <Boton />
  </FormContainer>
);

export default Formulario;

