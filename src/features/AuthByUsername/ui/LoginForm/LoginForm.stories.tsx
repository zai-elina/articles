import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import LoginForm, { LoginFormProps } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<LoginFormProps>;

const Template: Story<LoginFormProps> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "123", password: "asd" },
    
  }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator({
    loginForm: { username: "123", password: "asd", error: "ERROR" },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
