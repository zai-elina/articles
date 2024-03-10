import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./MainPage";

export default {
  title: "pages/MainPage",
  component: MainPage,
} as Meta;

type MainPageStory = Story;

const Template: MainPageStory = (args) => <MainPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
