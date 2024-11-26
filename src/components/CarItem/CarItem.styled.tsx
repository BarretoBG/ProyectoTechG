import styled from "styled-components";

//esto podr'ia ser un componente
export const Titulo = styled.h2`
  font-family: Onest;  
  font-size: 18px;
  padding: 15px;
  color: black;
  letter-spacing: 1px;
  font-weight: 100;
  text-align: center;
`;

const Tabla = styled.table`
  font-family: Onest;   
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

// si esto es reutilizable podr'ia ser un componente
const FilaHeader = styled.tr`
  background-color: #333;
  color: #fff;
`;

const Fila = styled.tr`
  border-bottom: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const CeldaHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

const Celda = styled.td`
  padding: 10px;
  text-align: center;
`;

const BotonAumentar = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BotonDisminuir = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cantidad = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
`;

const BotonEliminar = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const CarItemStyled = {
    Titulo,
    Tabla,
    FilaHeader,
    Fila,
    CeldaHeader,
    Celda,
    BotonAumentar,
    BotonDisminuir,
    Cantidad,
    BotonEliminar
  };
  
export default CarItemStyled;