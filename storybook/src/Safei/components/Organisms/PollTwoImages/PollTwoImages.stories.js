import React from "react";
import PollTwoImages from "./PollTwoImages";

export default {
  title: "Organisms/PollTwoImages",
  component: PollTwoImages,
  //decorators: [story => <Center>{story()}</Center>]
};

const Template = (args) => <PollTwoImages {...args} />;
export const _PollTwoImages = Template.bind({});
_PollTwoImages.args = {
  //   disabled: false,
  //   size: "lg",
};
