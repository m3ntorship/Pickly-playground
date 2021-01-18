import React from "react";
import Photo from "../../Atoms/Photos/Photo";
import InputImage from "../../Atoms/Inputtexts/InputImage";

function UploadImage({ status, imageSrc, fullRound, width, icon }) {
  return (
    <div>
      <Photo status={status} imageSrc={imageSrc} />
      <InputImage fullRound={fullRound} width={width} icon={icon} />
    </div>
  );
}

export default UploadImage;
