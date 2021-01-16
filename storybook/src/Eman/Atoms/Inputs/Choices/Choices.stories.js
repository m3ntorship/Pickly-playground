import React from "react";
import { Choices, INPUT } from "./Choices";

export default {
  title: "Eman/Atoms/Inputs/ChoicesInput",
  component: Choices,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          INPUT.STATUS.DEFAULT,
          INPUT.STATUS.ERROR,
          INPUT.STATUS.SUCCESS,
          INPUT.STATUS.DISABLED,
        ],
      },
    },
    letterIndex: {
      control: {
        type: "number",
        min: 0,
        max: 25,
      },
    },
  },
};

const Template = (args) => <Choices {...args} />;

export const choices = Template.bind({});
choices.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  placeholder: "Enter Text",
  letterIndex: 0,
};
