import React from "react";
import { Meta, Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { EditableProfileCard } from "./EditableProfileCard";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

export default {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof EditableProfileCard>;

const Template: Story<typeof EditableProfileCard> = (args) => (
  <EditableProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        age: 22,
        country: Country.Russia,
        lastname: "eee",
        first: "asd",
        city: "asf",
        currency: Currency.USD,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: "admin",
        age: 22,
        country: Country.Armenia,
        lastname: "ulbi tv",
        first: "asd",
        city: "asf",
        currency: Currency.USD,
      },
    },
  }),
];
