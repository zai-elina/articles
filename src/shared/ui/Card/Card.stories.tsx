import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof Card>;

type CardStory = Story<typeof Card>;

const Template: CardStory = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Текст в карточке",
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Текст в карточке",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
