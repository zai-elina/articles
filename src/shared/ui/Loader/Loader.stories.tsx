import React from "react";
import { Meta, Story } from "@storybook/react";
import { Loader, LoaderProps } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {
    className: { control: "text" },
  },
} as Meta;

type LoaderStory = Story<LoaderProps>;

const Template: LoaderStory = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
