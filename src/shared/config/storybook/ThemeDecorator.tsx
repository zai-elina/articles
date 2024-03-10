import { Story } from "@storybook/react";
import { Theme } from "../../../app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
