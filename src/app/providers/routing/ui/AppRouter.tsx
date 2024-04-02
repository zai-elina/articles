import { getUserAuthData } from "entities/User";
import { FC, Suspense, memo, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { PageLoader } from "widgets/PageLoader";

const AppRouter: FC = () => {
  const isAuth = useAppSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) =>
      route.authOnly && !isAuth ? false : true
    );
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);
