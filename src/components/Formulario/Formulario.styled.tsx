import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Titulo = styled.h2`
  color: #607d8b;
  border-bottom: 4px solid #df7d0d;
  display: inline-block;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
`;

const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: #05b580;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BotonStyled = {
  FormContainer,
  Titulo,
  ForgotPasswordLink,
};

export default BotonStyled;
