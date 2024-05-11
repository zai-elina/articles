import React from "react";
import { Meta, Story } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  argTypes: {
    className: { control: "text" },
  },
} as Meta<typeof Tabs>;

type TabsStory = Story<typeof Tabs>;

const Template: TabsStory = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    { value: "tab1", content: "tab1" },
    { value: "tab2", content: "tab2" },
    { value: "tab3", content: "tab3" },
  ],
  value: "tab3",
};
