import React from "react";
import { Input, Input_Optins } from "../Inputs/Input";
export default {
  title: "Pickly/storybook/InputsWithIcon",
  component: Input,
  argTypes: {
    Case: {
      control: {
        type: "select",
        options: [
          Input_Optins.Case.Normal,
          Input_Optins.Case.Success,
          Input_Optins.Case.Failure,
        ],
      },
    },
  },
};
const Template = (args) => <Input {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  casetype: Input_Optins.Case.Normal,
};
export const Success = Template.bind({});
Success.args = {
  casetype: Input_Optins.Case.Success,
};
export const Failure = Template.bind({});
Failure.args = {
  casetype: Input_Optins.Case.Failure,
};
