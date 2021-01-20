import React from "react";
import { InputWithIcon, INPUT } from "./InputWithIcon";

export default {
  title: "Heba/atoms/Inputs/InputWithIcon",
  component: InputWithIcon,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: [
          INPUT.STATUS.DEFAULT,
          INPUT.STATUS.ERROR,
          INPUT.STATUS.SUCCESS,
          INPUT.STATUS.DISABLED,
        ],
      },
    },
    icon: {
      control: {
        type: "radio",
        options: [INPUT.ICON.LEFT, INPUT.ICON.RIGHT],
      },
    },
  },
};

const Template = (args) => <InputWithIcon {...args} />;

export const primaryLabelIcon = Template.bind({});
primaryLabelIcon.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  icon: "",
  placeholder: "Enter Text",
};
