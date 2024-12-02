import React, { FC } from 'react';
import ModalStyled from './Modal.styled'; // Importamos los estilos

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // No renderiza el modal si no está abierto

  return (
    <ModalStyled.ModalOverlay onClick={closeModal}>
      <ModalStyled.ModalContainer onClick={(e) => e.stopPropagation()}> {/* Evita cerrar al hacer clic dentro */}
        <ModalStyled.ModalHeader>Olvidé mi contraseña</ModalStyled.ModalHeader>
        <p>Ingresa tu correo electrónico para restablecer tu contraseña.</p>
        <ModalStyled.InputField type="email" placeholder="Correo electrónico" />
        <ModalStyled.Button>Enviar</ModalStyled.Button>
        <ModalStyled.CloseButton onClick={closeModal}>Cerrar</ModalStyled.CloseButton>
      </ModalStyled.ModalContainer>
    </ModalStyled.ModalOverlay>
  );
};

export default Modal;
