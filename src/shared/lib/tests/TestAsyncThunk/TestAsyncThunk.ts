import { StateSchema } from "app/providers/StoreProvider";
import { AnyAction, AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";
import { NavigateOptions, To } from "react-router-dom";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios");

const mockedAxios = axios as jest.MockedFunctionDeep<AxiosStatic>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: (to: To, options?: NavigateOptions) => void;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
