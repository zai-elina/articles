import React from "react";
import { Meta, Story } from "@storybook/react";
import { Code } from "./Code";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    background: { control: "color" },
  },
} as Meta<typeof Code>;

type CodeStory = Story<typeof Code>;

const Template: CodeStory = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    "export default {\n" +
    "    title: 'shared/Code',\n" +
    "    component: Code,\n" +
    "    argTypes: {\n" +
    "        backgroundColor: { control: 'color' },\n" +
    "    },\n" +
    "} as ComponentMeta<typeof Code>;\n" +
    "\n" +
    "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n" +
    "\n" +
    "export const Normal = Template.bind({});",
};

export const Dark = Template.bind({});
Dark.args = {
  text:
    "export default {\n" +
    "    title: 'shared/Code',\n" +
    "    component: Code,\n" +
    "    argTypes: {\n" +
    "        backgroundColor: { control: 'color' },\n" +
    "    },\n" +
    "} as ComponentMeta<typeof Code>;\n" +
    "\n" +
    "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n" +
    "\n" +
    "export const Normal = Template.bind({});",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
