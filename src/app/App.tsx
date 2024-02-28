import { FC } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { AppRouter } from "./providers/routing";
import { Navbar } from "widgets/Navbar";

const App: FC = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toogleTheme}>Toogle</button>
    </div>
  );
};

export default App;
