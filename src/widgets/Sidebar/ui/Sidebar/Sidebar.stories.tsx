import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar, SidebarProps } from "./Sidebar";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
} as Meta;

type SidebarStory = Story<SidebarProps>;

const Template: SidebarStory = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
