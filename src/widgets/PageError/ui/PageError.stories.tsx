import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError, PageErrorProps } from "./PageError";

export default {
  title: "widgets/PageError",
  component: PageError,
} as Meta;

type PageErrorStory = Story<PageErrorProps>;

const Template: PageErrorStory = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
