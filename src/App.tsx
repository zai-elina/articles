import { FC, Suspense } from "react";
import "./index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainLazy } from "./components/pages/Main/Main.lazy";
import { TextLazy } from "./components/pages/About/Text.lazy";

const App: FC = () => {
  return (
    <div className="app">
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
