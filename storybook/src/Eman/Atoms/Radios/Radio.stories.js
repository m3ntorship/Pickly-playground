import React from "react";
import { Radio, RADIO } from "./Radio";

export default {
  title: "Eman/Atoms/Radios",
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [RADIO.SIZE.DEFAULT, RADIO.SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <Radio {...args} />;

export const radio = Template.bind({});
radio.args = {
  size: RADIO.SIZE.DEFAULT,
  disabled: false,
};
