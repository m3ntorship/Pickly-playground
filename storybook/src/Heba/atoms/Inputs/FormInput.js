import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./components/Input";
import Variants from "./components/Variants";
import SideIcons from "./components/SideIcons";

const FormInput = (props) => {
  const {
    variant = "default",
    rightIcon = false,
    leftIcon = false,
    withLabel = true,
    disabled = false,
  } = props;
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const hideIconHandler = (e) => {
    setFocus(false);
    e.stopPropagation();
  };
  const showIconHandler = (e) => {
    setFocus(true);
    e.stopPropagation();
  };
  return (
    <div className="flex" onClick={hideIconHandler} style={{ width: "574px" }}>
      <form className="relative">
        {withLabel ? (
          <label className="text-xs text-dark-grey font-light mb-xs block">
            Label
          </label>
        ) : null}

        <Input
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          prefix={false}
          prefixDrop={false}
          variant={variant}
          disabled={disabled}
          click={showIconHandler}
          setHover={setHover}
        />
        <Variants
          variant={variant}
          focus={focus}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          withLabel={withLabel}
        />
        <SideIcons
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          hover={hover}
          focus={focus}
          withLabel={withLabel}
        />
      </form>
    </div>
  );
};

FormInput.propTypes = {
  variant: PropTypes.oneOf(["default", "error", "success"]),
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  withLabel: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FormInput;
