import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { AppRouter } from "./providers/routing";

const App: FC = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toogle</button>
      <br />
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>about</Link>
      <AppRouter />
    </div>
  );
};

export default App;
