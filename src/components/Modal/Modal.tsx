import React, { useState } from 'react';
import ModalStyled from './Modal.styled';

const { ModalOverlay, ModalContainer, ModalHeader, InputField, Button, CloseButton } = ModalStyled;

const Modal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = () => {
      // Validar si el correo es válido
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        setIsValidEmail(false);
        return;
      }
  
      // Mostrar mensaje de éxito
      alert('Se envió la información al correo ingresado');
      closeModal(); // Cerrar el modal después de enviar
    };
  
    return (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader>Olvidé mi Contraseña</ModalHeader>
          <InputField
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={handleChange}
            style={{ borderColor: isValidEmail ? '#ccc' : 'red' }}
          />
          {!isValidEmail && <p style={{ color: 'red' }}>Por favor, ingresa un correo válido</p>}
          <Button onClick={handleSubmit}>Enviar</Button>
          <div>
            <CloseButton onClick={closeModal}>Cerrar</CloseButton>
          </div>
        </ModalContainer>
      </ModalOverlay>
    );
  };
  
  export default Modal;