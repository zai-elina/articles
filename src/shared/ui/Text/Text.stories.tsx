import React from "react";
import { Meta, Story } from "@storybook/react";
import { Text, ThemeText } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof Text>;

type TextStory = Story<typeof Text>;

const Template: TextStory = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
  text: "text",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  text: "text",
  theme: ThemeText.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title",
  text: "text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "text",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
