import React from "react";
import Inputtext from "./Inputtext";

export default {
  title: "kareem/Atoms/InputText",
  component: Inputtext,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: ["normal", "error", "success"],
      },
    },
  },
};

const Template = (args) => <Inputtext {...args} />;
export const Input = Template.bind({});
Input.args = {
  status: "normal",
  placeholder: "Text",
};
