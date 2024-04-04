import { getUserAuthData } from "entities/User";
import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";

interface RequiareAuthProps {
  children: ReactNode;
}
export const RequiareAuth: FC<RequiareAuthProps> = ({ children }) => {
  const isAuth = useAppSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
