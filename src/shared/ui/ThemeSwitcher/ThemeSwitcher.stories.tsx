import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
} as Meta<typeof ThemeSwitcher>;

type ThemeSwitcherStory = Story<typeof ThemeSwitcher>;

const Template: ThemeSwitcherStory = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
