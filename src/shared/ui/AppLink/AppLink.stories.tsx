import React from "react";
import { Meta, Story } from "@storybook/react";
import { AppLink, AppLinkProps, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    className: { control: "text" },
    theme: {
      control: { type: "select", options: ["Primary"] },
    },
  },
  args: {
    to: "/",
  },
} as Meta;

type AppLinkStory = Story<AppLinkProps>;

const Template: AppLinkStory = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: "Text",
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "Text",
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
