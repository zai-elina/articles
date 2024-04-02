import React from "react";
import { Meta, Story } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

export default {
  title: "shared/CurrencySelect",
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof CurrencySelect>;

const Template: Story<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
