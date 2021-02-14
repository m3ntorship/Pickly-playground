import React from "react";
import InputtextLIcon from "./InputtextLIcon";

export default {
  title: "kareem/Atoms/InputText+LeftIcon",
  component: InputtextLIcon,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["normal", "error", "success"],
      },
    },
  },
};

const Template = (args) => <InputtextLIcon {...args} />;
export const Input = Template.bind({});
Input.args = {
  status: "normal",
  placeholder: "Text",
};
