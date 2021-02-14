import React from "react";
import General from "./General";

export default {
  title: "Mollecules/General",
  component: General,
};

const Template = (args) => <General {...args} />;
export const GeneralStatus = Template.bind({});
GeneralStatus.args = {
  //   status: "error",
  // prefix: '+20',
  // direction: 'flex-row'
};
