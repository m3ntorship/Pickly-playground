import React from "react";
import { Tab, SIZE, ICONS } from "./Tab";

export default {
  title: "Omar/Molecules/Tab",
  component: Tab,
  argsTypes: {
    ButtonSize: {
      control: {
        type: "select",
        options: [SIZE.BUTTONSIZE.DEFAULT, SIZE.BUTTONSIZE.SMALL],
      },
    },
    Icons: {
      control: {
        type: "select",
        options: [ICONS.IMAGE, ICONS.TEXT, ICONS.DOCUMENT],
      },
    },
  },
};

const Template = (args) => <Tab {...args} />;
export const Default = Template.bind({});
Default.args = {
  ButtonSize: SIZE.BUTTONSIZE.DEFAULT,
  Icons: ICONS.IMAGE,
  LabelText: "Label",
  disabled: false,
};
