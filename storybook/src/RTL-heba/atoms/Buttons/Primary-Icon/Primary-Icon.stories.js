import React from "react";
import { ButtonIcon, ICON_OPTIONS, BUTTON_OPTIONS } from "./Primary-Icon";

export default {
  title: "Heba/atoms/Buttons/PrimaryIcon",
  component: ButtonIcon,
  argTypes: {
    iconPosition: {
      control: {
        type: "select",
        options: [ICON_OPTIONS.POSTION.LEFT, ICON_OPTIONS.POSTION.RIGHT],
      },
    },
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

const Template = (args) => <ButtonIcon {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  children: "Button Text",
  iconPosition: ICON_OPTIONS.POSTION.RIGHT,
  size: BUTTON_OPTIONS.SIZE.BIG,
};
