import React from "react";
import { Checkbox, CHECKBOX } from "./Checkbox";

export default {
  title: "Eman/Atoms/Checkboxes",
  component: Checkbox,
  argTypes: {
    disabled: {
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
  disabled: false,
  size: CHECKBOX.SIZE.DEFAULT,
};
