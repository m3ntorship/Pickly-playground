import React from "react";
import { InputWithLabel, INPUT } from "./InputWithLabel";

export default {
  title: "Heba/atoms/Inputs/InputWithLabel",
  component: InputWithLabel,
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
  },
};

const Template = (args) => <InputWithLabel {...args} />;

export const primaryLabel = Template.bind({});
primaryLabel.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  placeholder: "Enter Text",
};
