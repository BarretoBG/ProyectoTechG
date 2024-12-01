import { FC } from "react";
import { Link } from "react-router-dom";
import HeaderStyled from '../HeaderPrincipal/Header.styled';
import { ModuleRoutes } from "../../proxy/router";

const { Logo, LogoLetra, LogoDibujo } = HeaderStyled;

export const LogoHeader: FC = () => (
  <Logo>
    <Link to={ModuleRoutes.Init}>
      <LogoDibujo src="src/assets/images/logo1.png" alt="Logo" />
    </Link>
    <Link to={ModuleRoutes.Init}>
      <LogoLetra src="src/assets/images/logo.png" alt="Logo Text" />
    </Link>
  </Logo>
);
