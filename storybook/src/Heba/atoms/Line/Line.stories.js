import React from "react";
import { Divider, DIVIDER } from "./Line";

export default {
  title: "Heba/atoms/Line",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: [DIVIDER.TYPE.HORIZONTAL, DIVIDER.TYPE.VERTICAL],
      },
    },
    range: {
      control: {
        type: "range",
        min: DIVIDER.RANGE.MIN,
        max: DIVIDER.RANGE.MAX,
        step: DIVIDER.RANGE.STEP,
      },
    },
  },
};

const Template = (args) => <Divider {...args} />;
export const divider = Template.bind({});
divider.args = {
  type: DIVIDER.TYPE.HORIZONTAL,
  range: DIVIDER.RANGE.MIN,
};
