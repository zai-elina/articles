import React from "react";
import { Meta, Story } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    className: { control: "text" },
  },
} as Meta<typeof CommentList>;

type CommentListStory = Story<typeof CommentList>;

const Template: CommentListStory = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: "1",
      text: "some comment",
      user: { id: "1", username: "Tiny" },
    },
    {
      id: "2",
      text: "some comment 2",
      user: { id: "2", username: "Roky" },
    },
    {
      user: { id: "3", username: "Wex" },
      text: "212",
      id: "DPlm2vw",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [
    {
      id: "2",
      text: "some comment 2",
      user: { id: "2", username: "Roky" },
    },
    {
      user: { id: "3", username: "Wex" },
      text: "212",
      id: "DPlm2vw",
    },
  ],
  isLoading: true,
};
