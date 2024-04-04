import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
} as Meta;

type ProfileCardStory = Story;

const Template: ProfileCardStory = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: "Jack",
    lastname: "Smith",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Kazan",
    username: "jack",
    avatar: "",
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "Error",
};
