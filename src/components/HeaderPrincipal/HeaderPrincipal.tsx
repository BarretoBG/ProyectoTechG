import { FC } from "react";
import HeaderStyled from './Header.styled';
import { LogoHeader } from "../LogoHeader/LogoHeader";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserActions } from "../User/User";

const { HeaderWrapper } = HeaderStyled;

interface HeaderProps {
  setBusqueda: (busqueda: string) => void;
}

const Header: FC<HeaderProps> = ({ setBusqueda }) => (
  <HeaderWrapper>
    <LogoHeader />
    <SearchBar setBusqueda={setBusqueda} />
    <UserActions />
  </HeaderWrapper>
);

export default Header;

