import React from "react";
import PollOneImage from "./PollOneImage";

export default {
  title: "Organisms/PollOneImage",
  component: PollOneImage,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <PollOneImage {...args} />;
export const _PollOneImage = Template.bind({});
_PollOneImage.args = {
  //   disabled: false,
  //   size: "lg",
};
