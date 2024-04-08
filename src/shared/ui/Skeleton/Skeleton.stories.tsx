import React from "react";
import { Meta, Story } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof Skeleton>;

type SkeletonStory = Story<typeof Skeleton>;

const Template: SkeletonStory = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: 200,
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  border: "50%",
  width: 100,
  height: 100,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: 200,
  height: 200,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: "50%",
  width: 100,
  height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
