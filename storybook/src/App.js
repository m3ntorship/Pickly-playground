import React from "react";
import Form from "./Safei/DynamicInputTask/Form";
import ImagesUploader from "./Safei/UploadTask/ImagesUploader";
const App = () => {
  return (
    <div className="flex flex-col   items-center mt-8 py-16 bg-grey-bg2">
      <ImagesUploader />
      <Form />
    </div>
  );
};

export default App;
