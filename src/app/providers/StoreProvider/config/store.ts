import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

// для переиспользования перенесла конфигурацию в функцию
export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
