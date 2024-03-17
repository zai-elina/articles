import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };
    const { decrement } = counterActions;
    expect(counterReducer(state as CounterSchema, decrement())).toEqual({
      value: 9,
    });
  });

  test("increment", () => {
    const state: CounterSchema = { value: 10 };
    const { increment } = counterActions;
    expect(counterReducer(state as CounterSchema, increment())).toEqual({
      value: 11,
    });
  });

  test("with empty state", () => {
    const state: CounterSchema = { value: null };
    const { increment } = counterActions;
    expect(counterReducer(state as CounterSchema, increment())).toEqual({
      value: 1,
    });
  });
});
