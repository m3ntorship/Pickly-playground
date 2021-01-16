import React from "react";
import { LabelwIcon, INPUT } from "./LabelwIcon";

export default {
  title: "Eman/Atoms/Inputs/Label-Icon",
  component: LabelwIcon,
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
    icon: {
      control: {
        type: "select",
        options: [INPUT.ICON.LEFT, INPUT.ICON.RIGHT],
      },
    },
  },
};

const Template = (args) => <LabelwIcon {...args} />;

export const primaryLabelIcon = Template.bind({});
primaryLabelIcon.args = {
  label: "Label",
  type: INPUT.STATUS.DEFAULT,
  icon: "",
  placeholder: "Enter Text",
};
