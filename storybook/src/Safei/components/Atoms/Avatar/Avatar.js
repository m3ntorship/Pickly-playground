import React from "react";
//source prop is set statically from inside the comp itself for now, it can not be passed from the outside!
//props to be passed as controls only size and type.
//no props passed will result in default size = sm and default photo = default.svg aka not filled svg in design.
const Avatar = ({ size, type, source }) => {
  source =
    type == "user"
      ? "/avatar.png"
      : type == "anon"
      ? "/anon.svg"
      : "/default.svg";
  const classes =
    size == "lg" ? "h-14 w-14" : size == "md" ? "h-10 w-10" : "h-8 w-8 ";
  return (
    <div className="inline-block">
      <img src={source} className={`rounded-full ${classes} mt-1`} />
    </div>
  );
};

export default Avatar;
