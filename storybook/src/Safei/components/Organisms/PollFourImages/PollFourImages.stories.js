import React from "react";
import PollFourImages from "./PollFourImages";

export default {
  title: "Organisms/PollFourImages",
  component: PollFourImages,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <PollFourImages {...args} />;
export const _PollFourImages = Template.bind({});
_PollFourImages.args = {
  //   disabled: false,
  //   size: "lg",
};
