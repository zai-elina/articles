import { FC } from "react";
import "./index.scss";
import { Text } from "./components/Text";
import { Link, Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="app">
      <Link to={"/"}>main</Link>
      <br />
      <Link to={"/about"}>about</Link>
      <Routes>
        <Route path={"/"} element={<div>about</div>} />
        <Route path={"/about"} element={<Text />} />
      </Routes>
    </div>
  );
};

export default App;
