import React from "react";
import { Meta, Story } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Select>;

const Template: Story<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Укажите значение",
  options: [
    { value: "123", content: "Первый пункт" },
    { value: "1234", content: "Второй пункт" },
  ],
};
