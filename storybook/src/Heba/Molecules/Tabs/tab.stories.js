import React from "react";
import { Tab, TAB } from "./Tab";

export default {
  title: "Heba/Molecules/Tabs",
  component: Tab,
  argTypes: {
    icon: {
      control: {
        type: "radio",
        options: [TAB.ICON.IMAGE, TAB.ICON.TEXT, TAB.ICON.MORE, TAB.ICON.NONE],
      },
    },
    status: {
      control: {
        type: "radio",
        options: [TAB.STATUS.ON, TAB.STATUS.OFF],
      },
    },
    styles: {
      control: {
        type: "select",
        options: [
          TAB.STYLES.ACTIVE,
          TAB.STYLES.INACTIVE,
          TAB.STYLES.HOVER,
          TAB.STYLES.DISABLED,
        ],
      },
    },
  },
};

const Template = (args) => <Tab {...args} />;

export const tab = Template.bind({});
tab.args = {
  icon: TAB.ICON.IMAGE,
  content: "Image Poll",
  status: TAB.STATUS.ON,
  styles: TAB.STYLES.ACTIVE,
};
