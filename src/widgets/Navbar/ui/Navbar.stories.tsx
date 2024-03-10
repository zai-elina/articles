import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar, NavbarProps } from "./Navbar";

export default {
  title: "widgets/Navbar",
  component: Navbar,
} as Meta;

type NavbarStory = Story<NavbarProps>;

const Template: NavbarStory = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
