import React from "react";
import { InputWithOption, InputWithOption_OPTION } from "./InputWithOption";

export default {
  title: "Heba/atoms/InputWithOption",
  component: InputWithOption,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: [
          InputWithOption_OPTION.TYPE.A,
          InputWithOption_OPTION.TYPE.B,
          InputWithOption_OPTION.TYPE.C,
          InputWithOption_OPTION.TYPE.D,
        ],
      },
    },
  },
};

const Template = (args) => <InputWithOption {...args} />;
export const inputWithOption = Template.bind({});
inputWithOption.args = {
  type: InputWithOption_OPTION.TYPE.A,
};
