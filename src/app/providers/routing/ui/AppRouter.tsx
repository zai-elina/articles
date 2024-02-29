import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

interface Props {}

const AppRouter: FC<Props> = (props) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<>Loading...</>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
