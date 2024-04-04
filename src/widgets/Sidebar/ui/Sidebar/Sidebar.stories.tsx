import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "widgets/Sidebar",
  component: Sidebar,
} as Meta<typeof Sidebar>;

type SidebarStory = Story<typeof Sidebar>;

const Template: SidebarStory = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
