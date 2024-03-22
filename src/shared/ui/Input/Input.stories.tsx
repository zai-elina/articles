import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof Input>;

type InputStory = Story<typeof Input>;

const Template: InputStory = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: "text",
};

export const Dark = Template.bind({});
Primary.args = {
  value: "text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

