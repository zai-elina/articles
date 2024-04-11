import React from "react";
import { Meta, Story } from "@storybook/react";
import AddNewComment from "./AddNewComment";
import { action } from "@storybook/addon-actions"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

export default {
  title: "features/AddNewComment",
  component: AddNewComment,
  argTypes: {
    className: { control: "text" },
  },
} as Meta<typeof AddNewComment>;

type AddNewCommentStory = Story<typeof AddNewComment>;

const Template: AddNewCommentStory = (args) => <AddNewComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSendComment: action("onSendComment"),
};
Primary.decorators = [StoreDecorator({})];
