import React from "react";
import { Meta, Story } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    className: { control: "text" },
  },
} as Meta<typeof CommentCard>;

type CommentCardStory = Story<typeof CommentCard>;

const Template: CommentCardStory = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: "1",
    text: "some comment",
    user: { id: "1", username: "Tiny" },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
