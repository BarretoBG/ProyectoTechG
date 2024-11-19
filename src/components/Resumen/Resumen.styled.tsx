import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 8px;
  font-family: Onest;   
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
    font-weight: bold;
  }
  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const Boton = styled.button`
  background-color: #00a473;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #00865e;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ResumenStyled = {
  Formulario,
  Campo,
  Error,
  Boton,
  Select,
};

export default ResumenStyled;
