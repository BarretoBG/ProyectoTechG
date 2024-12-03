import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { ModuleRoutes } from "../proxy/router";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): FC<P> => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { user } = useUser();

    if (!user?.firstName) {
      return <Navigate to={ModuleRoutes.Login} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
