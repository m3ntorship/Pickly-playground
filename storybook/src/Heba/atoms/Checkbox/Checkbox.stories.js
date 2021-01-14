import React from "react";
import { Checkbox, CHECKBOX } from "../Checkbox/Checkbox";

export default {
  title: "Heba/atoms/Checkboxes",
  component: Checkbox,
  argTypes: {
    status: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
        options: [CHECKBOX.SIZE.DEFAULT, CHECKBOX.SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  status,
  size: CHECKBOX.SIZE.DEFAULT,
};
