import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
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
} as Meta<typeof Button>;

type ButtonStory = Story<typeof Button>;

const Template: ButtonStory = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Text",
};

export const DefaultSizeL = Template.bind({});
DefaultSizeL.args = {
  children: "Text",
  size: ButtonSize.L,
};

export const DefaultSizeXL = Template.bind({});
DefaultSizeXL.args = {
  children: "Text",
  size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: "Text",
  size: ButtonSize.M,
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: "Text",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  theme: ButtonTheme.BACKGROUND,
  children: "Text",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: "Text",
};

export const Square = Template.bind({});
Square.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: ">",
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: ">",
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: ">",
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: ">",
  size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: ButtonTheme.BACKGROUND,
  children: "Text",
  disabled: true,
};
