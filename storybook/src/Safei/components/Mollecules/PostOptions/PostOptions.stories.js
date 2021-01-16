import React from "react";
import PostOptions from "./PostOptions";

export default {
  title: "Mollecules/PostOptions",
  component: PostOptions,
};

const Template = (args) => <PostOptions {...args} />;
export const _PostOptions = Template.bind({});
_PostOptions.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
