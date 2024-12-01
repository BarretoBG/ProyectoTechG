import { FC } from "react";
import HeaderStyled from '../HeaderPrincipal/Header.styled';

const { Centro, InputBusqueda, ButtonBusqueda } = HeaderStyled;

interface SearchBarProps {
  setBusqueda: (busqueda: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ setBusqueda }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(event.target.value);
  };

  return (
    <Centro>
      <InputBusqueda 
        type="text" 
        id="input-busqueda" 
        placeholder="Buscar productos..." 
        onChange={handleSearchChange}
      />
      <ButtonBusqueda>Buscar</ButtonBusqueda>
    </Centro>
  );
};
