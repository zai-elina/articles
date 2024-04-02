import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar } from "shared/ui/Avatar/Avatar";
import AvatarImg from "./tekhnik.jpg";

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Avatar>;

const Template: Story<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
};
