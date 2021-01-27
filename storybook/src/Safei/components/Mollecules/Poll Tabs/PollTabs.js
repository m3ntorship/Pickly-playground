import React from "react";
import PollTab from "../../Atoms/Tabs/PollTab";

const PollTabs = () => {
  return (
    <div className="inline-block">
      <div className="flex flex-row">
        <PollTab type={"img"} text={"Img Poll"} />
        <PollTab type={"file"} text={"File Poll"} />
        <PollTab type={"poll"} text={"A Poll Poll"} />
      </div>
    </div>
  );
};

export default PollTabs;
