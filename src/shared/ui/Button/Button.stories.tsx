import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, ThemeButton } from "./Button";

export default {
  title: "Components/Button",
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
  className: "",
  theme: "",
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  className: "custom-class",
  theme: ThemeButton.CLEAR,
  children: "Text",
};

export const Outline = Template.bind({});
Outline.args = {
  className: "custom-class",
  theme: ThemeButton.OUTLINE,
  children: "Text",
};
