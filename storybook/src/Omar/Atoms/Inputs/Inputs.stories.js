import React from "react";
import { Inputs, OPTION } from "./Inputs";

export default {
  title: "Omar/Atoms/Inputs",
  component: Inputs,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          OPTION.STATUS.DEFAULT,
          OPTION.STATUS.SUCCESS,
          OPTION.STATUS.ERROR,
          OPTION.STATUS.DISABLED,
        ],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["default", "rightIcon", "leftIcon"],
      },
    },
  },
};

const Template = (args) => <Inputs {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: OPTION.STATUS.DEFAULT,
  label: "Label",
  placeHolder: "Enter Text",
  icon: "default",
  leftIcon: "Home",
};
