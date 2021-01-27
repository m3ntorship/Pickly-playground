import React from "react";
import { ButtonIconOnly, BUTTON_OPTIONS } from "./BtnIconOnly";

export default {
  title: "Eman/Atoms/Buttons/Primary-Icon-Only",
  component: ButtonIconOnly,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [
          BUTTON_OPTIONS.SIZE.SMALL,
          BUTTON_OPTIONS.SIZE.MEDIUM,
          BUTTON_OPTIONS.SIZE.BIG,
        ],
      },
    },
  },
};

const Template = (args) => <ButtonIconOnly {...args} />;

export const PrimaryIconOnly = Template.bind({});
PrimaryIconOnly.args = {
  size: BUTTON_OPTIONS.SIZE.BIG,
};
