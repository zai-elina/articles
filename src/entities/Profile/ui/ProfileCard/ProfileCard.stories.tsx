import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
} as Meta;

type ProfileCardStory = Story;

const Template: ProfileCardStory = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      isLoading: false,
      data: {
        first: "Jack",
        lastname: "Smith",
      },
    },
  }),
];
