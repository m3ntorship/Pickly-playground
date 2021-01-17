import React from "react";
import { Divider, DIVIDER } from "./Divider";

export default {
  title: "Eman/Atoms/Dividers",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "select",
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
    color: {
      control: {
        type: "color",
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
