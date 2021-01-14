import React from "react";
import { Man, MAN_OPTION } from "./Man";

export default {
  title: "Heba/atoms/ManImage",
  component: Man,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: [
          MAN_OPTION.TYPE.Man1,
          MAN_OPTION.TYPE.Man2,
          MAN_OPTION.TYPE.Man3,
          MAN_OPTION.TYPE.Man4,
        ],
      },
    },
  },
};

const Template = (args) => <Man {...args} />;
export const man = Template.bind({});
man.args = {
  type: MAN_OPTION.TYPE.Man1,
};
