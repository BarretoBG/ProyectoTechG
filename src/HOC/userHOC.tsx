import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { ModuleRoutes } from "../proxy/router";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): FC<P> => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { user } = useUser();

    // Verifica si el usuario está autenticado
    if (!user?.firstName) {
      return <Navigate to={ModuleRoutes.Login} replace />;
    }

    // Renderiza el componente si está autenticado
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
