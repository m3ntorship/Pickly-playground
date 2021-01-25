import React, { useState } from "react";
import ImageUploader from "./ImageUploader";

const ImagesUploader = () => {
  const [files, setFiles] = useState([]);
  const onChange = (e) => {
    setFiles(e.target.value);
  };
  return (
    <div>
      <input type="file" multiple onChange={onChange} />
      {files.map((file) => (
        <ImageUploader file={File} key={file.key} />
      ))}
    </div>
  );
};

export default ImagesUploader;
