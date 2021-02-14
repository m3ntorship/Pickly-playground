import React from "react";
import PostingBar from "./PostingBar";

export default {
  title: "Mollecules/PostingBar",
  component: PostingBar,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <PostingBar {...args} />;
export const _PostingBar = Template.bind({});
_PostingBar.args = {
  disabled: false,
};
