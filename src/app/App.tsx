import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

const App: FC = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toogle</button>
      <br />
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
