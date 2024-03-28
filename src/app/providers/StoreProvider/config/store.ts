import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { CombinedState, StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User/model/slice/userSlice";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";

// для переиспользования перенесла конфигурацию в функцию
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  //@ts-expect-error @typescript-eslint/ban-ts-comment
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
