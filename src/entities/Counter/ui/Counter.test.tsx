import { screen } from "@testing-library/react";
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { Counter } from "./Counter";
import { userEvent } from "@testing-library/user-event";

describe("Counter", () => {
  test("Test render", () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    
    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
  });

  test("Decrement value", async () => {
    const user = userEvent.setup();
    ComponentRender(<Counter />, { initialState: { counter: { value: 1 } } });
    
    const decrementButton = screen.getByTestId("decrement-button");
    await user.click(decrementButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
  });

  test("Increment value", async () => {
    const user = userEvent.setup();
    ComponentRender(<Counter />, { initialState: { counter: { value: 1 } } });
    
    const incrementButton = screen.getByTestId("increment-button");
    await user.click(incrementButton);
    expect(screen.getByTestId("value-title")).toHaveTextContent("2");
  });
});
