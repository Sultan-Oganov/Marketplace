import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export const WithAuthentication = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (isAuth) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};
