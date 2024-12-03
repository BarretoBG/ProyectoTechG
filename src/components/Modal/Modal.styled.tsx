import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contenedor = styled.div`
  background-color: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
`;

export const Titulo = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Enviar = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const Boton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Mensaje = styled.p`
  color: green;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const ModalStyled = {
    ModalOverlay,
    Contenedor,
    Titulo,
    Input,
    Enviar,
    Boton,
    Mensaje
  };
  
  export default ModalStyled;
