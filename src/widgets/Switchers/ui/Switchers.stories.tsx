import React from "react";
import { Meta, Story } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Switchers } from "./Switchers";

export default {
  title: "widgets/Switchers",
  component: Switchers,
} as Meta<typeof Switchers>;

type SwitchersStory = Story<typeof Switchers>;

const Template: SwitchersStory = (args) => <Switchers {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
