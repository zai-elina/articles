import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
} as Meta;

type NotFoundPageStory = Story;

const Template: NotFoundPageStory = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
