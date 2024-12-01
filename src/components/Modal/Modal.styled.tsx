import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const ModalHeader = styled.h3`
  margin-bottom: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #05b580;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #03a46d;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #607d8b;
  font-size: 14px;
  cursor: pointer;
`;

const ModalStyled = {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    InputField,
    Button,
    CloseButton
  };
  
  export default ModalStyled;
