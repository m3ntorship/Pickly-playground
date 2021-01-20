import React from "react";
import PollOption from "./PollOption";

export default {
  title: "Tramsi/Molecules/PollOptions",
  component: PollOption,
};

const Template = (args) => <PollOption {...args} />;

export const pollOption = Template.bind({});
pollOption.args = {
  pollName: "Img",
  pollText: "",
};
