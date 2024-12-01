import styled from "styled-components";

const Contenido = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  display: inline-block;
  color: #607d8b;
  font-weight: 300;
  letter-spacing: 1px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 0px;
  text-indent: 1em;
  border: 1px solid #05b580;
  font-size: 14px;
  letter-spacing: 1px;
  color: #607d8b;
  border-radius: 30px;
`;

const InputStyled = {
  Contenido,
  Label,
  InputField
};
  
export default InputStyled;