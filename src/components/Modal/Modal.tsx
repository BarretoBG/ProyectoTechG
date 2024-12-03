import { FC, useState } from 'react';
import ModalStyled from './Modal.styled';
import { validaEmail } from '../../utils/validaModal';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const { ModalOverlay, Contenedor, Titulo, Input, Enviar, Boton, Mensaje } = ModalStyled;

const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validaEmail(email)) {
      setIsValid(true);
      setIsSent(true);
    } else {
      setIsValid(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={closeModal}>
      <Contenedor onClick={(e) => e.stopPropagation()}>
        <Titulo>Olvidé mi contraseña</Titulo>
        <p>Ingresa tu correo electrónico para restablecer tu contraseña.</p>

        {isSent ? (
          <Mensaje>Correo enviado. Revisa tu bandeja de entrada.</Mensaje>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: isValid ? 'initial' : 'red' }} 
            />
            {!isValid && <p style={{ color: 'red' }}>Por favor, ingresa un correo electrónico válido.</p>}
            <Enviar type="submit">Enviar</Enviar>
          </form>
        )}
        
        <Boton onClick={closeModal}>Cerrar</Boton>
      </Contenedor>
    </ModalOverlay>
  );
};

export default Modal;
