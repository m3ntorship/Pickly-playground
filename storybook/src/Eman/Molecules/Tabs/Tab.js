import React, { useState } from "react";
import PropTypes from "prop-types";
import { Radio } from "./../../Atoms/Radios/Radio";
import Image from "./../../assets/icons/Tab/Image";
import Text from "./../../assets/icons/Tab/Text";
import File from "./../../assets/icons/Tab/File";

export const TAB = {
  ICON: {
    IMAGE: "Image",
    TEXT: "Text",
    MORE: "More",
    NONE: "None",
  },
  STYLES: {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    DISABLED: "Disabled",
  },
};

export const Tab = ({ content, icon, styles }) => {
  const [clicked, setClicked] = useState(false);

  const style =
    styles === TAB.STYLES.ACTIVE
      ? "border border-grey px-4 h-8 py-1.5 rounded-full font-semibold"
      : styles === TAB.STYLES.INACTIVE
      ? "bg-grey-bg px-4 h-8 py-1.5 rounded-full"
      : "bg-grey-shd6 px-4 h-8 py-1.5 rounded-full opacity-60";

  const handleClick = () => {
    setTimeout(() => setClicked(!clicked));
  };

  return (
    <>
      <label
        className={`inline-block ${!clicked && style} ${
          clicked &&
          "border border-grey px-4 h-8 py-1.5 rounded-full font-semibold"
        } ml-2 hover:bg-grey-shd6 hover:px-4 hover:h-8 hover:py-1.5 hover:rounded-full hover:border-grey-shd6 focus:outline-none cursor-pointer`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <Radio size="Small" />
          {icon === TAB.ICON.IMAGE && <Image className="ml-2" />}
          {icon === TAB.ICON.TEXT && <Text className="ml-2" />}
          {icon === TAB.ICON.MORE && <File className="ml-2" />}
          {icon === TAB.ICON.NONE && ""}
          <p className="text-sm text-dark-grey my-0 ml-2">{content}</p>
        </div>
      </label>
    </>
  );
};

Tab.propTypes = {
  icon: PropTypes.oneOf(["Image", "Text", "More", "None"]),
  content: PropTypes.string,
  styles: PropTypes.oneOf(["Active", "Hover", "Inactive", "Disabled"]),
};
