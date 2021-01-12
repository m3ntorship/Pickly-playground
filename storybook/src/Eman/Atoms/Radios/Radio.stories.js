import React from "react";
import { Radio, RADIO } from "./Radio";

export default {
  title: "Eman/Atoms/Radios",
  component: Radio,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: [RADIO.STATUS.ON, RADIO.STATUS.OFF],
      },
    },
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
  status: RADIO.STATUS.ON,
  size: RADIO.SIZE.DEFAULT,
};
