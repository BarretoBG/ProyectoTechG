import { FC } from "react";
import HeaderStyled from './Header.styled';
import { LogoHeader } from "../LogoHeader/LogoHeader";
import { UserActions } from "../User/User";

const { HeaderWrapper } = HeaderStyled;

const Header: FC = () => (
  <HeaderWrapper>
    <LogoHeader />
    <UserActions />
  </HeaderWrapper>
);

export default Header;
