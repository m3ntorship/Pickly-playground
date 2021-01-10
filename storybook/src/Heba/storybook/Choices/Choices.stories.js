import React from "react";
import { Choices } from "./Choices";
export default {
  title: "Pickly/storybook/Choices",
  component: Choices,
};
const Template = (args) => <Choices {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  isLabel: true,
  choice: "A",
};
