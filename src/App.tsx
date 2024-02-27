import { FC } from "react";
import "./index.scss";
import { Text } from "./components/Text";

const App: FC = () => {
  return (
    <div className="app">
      Заголовок
      <Text />
    </div>
  );
};

export default App;
