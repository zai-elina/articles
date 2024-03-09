import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    className: { control: "text" },
    theme: {
      control: { type: "select", options: ["clear"] },
    },
  },
} as Meta;

type ButtonStory = Story<ButtonProps>;

const Template: ButtonStory = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "",
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  theme: ThemeButton.CLEAR,
  children: "Text",
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ThemeButton.OUTLINE,
  children: "Text",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
