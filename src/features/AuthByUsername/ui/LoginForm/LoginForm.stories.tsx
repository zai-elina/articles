import React from "react";
import { Meta, Story } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof LoginForm>;

type LoginFormStory = Story<typeof LoginForm>;

const Template: LoginFormStory = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Primary.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
