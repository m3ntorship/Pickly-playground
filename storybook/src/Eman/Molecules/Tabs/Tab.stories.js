import React from "react";
import { Tab, TAB } from "./Tab";

export default {
  title: "Eman/Molecules/Tabs",
  component: Tab,
  argTypes: {
    icon: {
      control: {
        type: "radio",
        options: [TAB.ICON.IMAGE, TAB.ICON.TEXT, TAB.ICON.MORE, TAB.ICON.NONE],
      },
    },
    styles: {
      control: {
        type: "select",
        options: [TAB.STYLES.ACTIVE, TAB.STYLES.INACTIVE, TAB.STYLES.DISABLED],
      },
    },
  },
};

const Template = (args) => <Tab {...args} />;

export const tab = Template.bind({});
tab.args = {
  icon: TAB.ICON.IMAGE,
  content: "Image Poll",
  styles: TAB.STYLES.ACTIVE,
};
