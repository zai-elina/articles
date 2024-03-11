import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, SizeButton, ThemeButton } from "./Button";
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

export const DefaultSizeL = Template.bind({});
DefaultSizeL.args = {
  theme: "",
  children: "Text",
  size: SizeButton.L,
};

export const DefaultSizeXL = Template.bind({});
DefaultSizeXL.args = {
  theme: "",
  children: "Text",
  size: SizeButton.XL,
};

export const Clear = Template.bind({});
Clear.args = {
  theme: ThemeButton.CLEAR,
  children: "Text",
  size: SizeButton.M,
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

export const Background = Template.bind({});
Background.args = {
  theme: ThemeButton.BACKGROUND,
  children: "Text",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ThemeButton.BACKGROUND_INVERTED,
  children: "Text",
};

export const Square = Template.bind({});
Square.args = {
  theme: ThemeButton.BACKGROUND,
  square: true,
  children: ">",
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  theme: ThemeButton.BACKGROUND,
  square: true,
  children: ">",
  size: SizeButton.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  theme: ThemeButton.BACKGROUND,
  square: true,
  children: ">",
  size: SizeButton.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  theme: ThemeButton.BACKGROUND,
  square: true,
  children: ">",
  size: SizeButton.XL,
};
