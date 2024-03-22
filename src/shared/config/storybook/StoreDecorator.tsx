import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { Story } from "@storybook/react";

export const StoreDecorator =
  // eslint-disable-next-line react/display-name
  (state: DeepPartial<StateSchema>) => (Story: Story) => (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  );
