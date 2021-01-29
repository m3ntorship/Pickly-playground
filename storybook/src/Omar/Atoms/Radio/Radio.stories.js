import React from "react";
import { Radio, RADIO } from "./Radio";

export default {
  title: "Omar/Atoms/Radio",
  component: Radio,
  argsTypes: {
    size: {
      control: {
        type: "select",
        options: [RADIO.SIZE.DEFAULT, RADIO.SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <Radio {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: RADIO.SIZE.SMALL,
  disabled: false,
};
