import React from "react";
import { Avater, AVATER } from "./Avatar";

export default {
  title: "Heba/atoms/Avatar",
  component: Avater,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [AVATER.SIZE.LARGE, AVATER.SIZE.MEDIUM, AVATER.SIZE.SMALL],
      },
    },
    type: {
      control: {
        type: "select",
        options: [
          AVATER.TYPE.FILLED,
          AVATER.TYPE.ANONYMOUS,
          AVATER.TYPE.NOTFILLED,
        ],
      },
    },
  },
};

const Template = (args) => <Avater {...args} />;

export const avater = Template.bind({});
avater.args = {
  size: AVATER.SIZE.LARGE,
  type: AVATER.TYPE.FILLED,
};
