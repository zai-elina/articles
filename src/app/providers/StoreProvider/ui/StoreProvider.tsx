import { FC } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children?: string;
}
export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
