import styled from 'styled-components';

const BotonesContainer = styled.div`
  text-align: center;
  font-size: 14px;
`;

const Button = styled.button`
  height: 45px;
  width: 100%;
  margin: 15px 0;
  border-radius: 20px;
  outline: none;
  color: #fff;
  border: none;
  font-weight: 500;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #ff8614, #05b580);
  cursor: pointer;
`;

const BotonStyled = {
    BotonesContainer,
    Button
  };
  
export default BotonStyled;