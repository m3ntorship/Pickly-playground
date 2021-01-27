import React, { useState } from "react";
import ImageUploader from "./ImageUploader";

const ImagesUploader = () => {
  const [files, setFiles] = useState([]);
  const onChange = (e) => {
    //1
    setFiles([...e.target.files]);
  };
  return (
    <div>
      <input type="file" multiple onChange={onChange} />
      {files.map((file) => (
        <ImageUploader file={file} key={Math.random()} />
      ))}
    </div>
  );
};

export default ImagesUploader;
