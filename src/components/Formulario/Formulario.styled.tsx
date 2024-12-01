import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  color: #607d8b;
  border-bottom: 4px solid #df7d0d;
  display: inline-block;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const BotonStyled = {
    FormContainer,
    Titulo
  };
  
export default BotonStyled;