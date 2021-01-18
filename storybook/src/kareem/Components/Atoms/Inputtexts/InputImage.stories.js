import React from "react";
import InputImage from "./InputImage";

export default {
  title: "kareem/Atoms/InputImage",
  component: InputImage,
  argTypes: {
    fullRound: {
      control: {
        type: "boolean",
        options: [true, false],
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["none", "A", "B"],
      },
    },
  },
};

const Template = (args) => <InputImage {...args} />;
export const Input = Template.bind({});
Input.args = {
  fullRound: true,
  width: "420px",
  icon: "A",
  placeholder: "Type Caption (optional)",
};
