import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainLazy } from "./components/pages/Main/Main.lazy";
import { TextLazy } from "./components/pages/About/Text.lazy";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

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
          <Route path={"/"} element={<MainLazy />} />
          <Route path={"/about"} element={<TextLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
