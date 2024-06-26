import React from "react";
import { Meta, Story } from "@storybook/react";
import { Modal, ModalProps } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    background: { control: "color" },
  },
} as Meta;

type ModalStory = Story<ModalProps>;

const Template: ModalStory = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  isOpen: true,
};