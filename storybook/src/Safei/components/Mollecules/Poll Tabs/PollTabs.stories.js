import React from "react";
import PollTabs from "./PollTabs";

export default {
  title: "Mollecules/PollTabs",
  component: PollTabs,
  // count: {
  //   control: {
  //     type: "inline-radio",
  //     options: [0, 1, 2, 3],
  //   },
  // },
};

const Template = (args) => <PollTabs {...args} />;
export const PollTabsDisplay = Template.bind({});
//could add number of tabs as prop
PollTabsDisplay.args = {
  // count: 3,
  // prefix: '+20',
  // direction: 'flex-row'
};
