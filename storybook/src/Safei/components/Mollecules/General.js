import React from "react";
import Avatar from "../Atoms/Avatar/Avatar";
import GeneralTextInput from "../Atoms/Forms/TextInputs/GeneralTextInput";

const General = () => {
  return (
    <div className="flex flex-row  content-start">
      <div className="inline-block mr-4">
        <Avatar />
      </div>
      <div className="inline-block mr-4">
        <GeneralTextInput />
      </div>
    </div>
  );
};

export default General;
