import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher, ThemeSwitcherProps } from "./ThemeSwitcher";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
} as Meta;

type ThemeSwitcherStory = Story<ThemeSwitcherProps>;

const Template: ThemeSwitcherStory = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
