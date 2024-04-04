import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

export default {
  title: "features/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof EditableProfileCardHeader>;

const Template: Story<typeof EditableProfileCardHeader> = (args) => (
  <EditableProfileCardHeader {...args} />
);

export const Readonly = Template.bind({});
Readonly.args = {};
Readonly.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
    },
  }),
];

export const Edit = Template.bind({});
Edit.args = {};
Edit.decorators = [
  StoreDecorator({
    profile: {
      readonly: false,
    },
  }),
];
