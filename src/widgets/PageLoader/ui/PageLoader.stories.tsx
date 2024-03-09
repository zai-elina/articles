import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageLoader, PageLoaderProps } from "./PageLoader";

export default {
  title: "widgets/PageLoader",
  component: PageLoader,
} as Meta;

type PageLoaderStory = Story<PageLoaderProps>;

const Template: PageLoaderStory = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
