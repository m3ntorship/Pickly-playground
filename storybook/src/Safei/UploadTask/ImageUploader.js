import React from "react";
import useCloudainary from "./useCloudainary";
import Slider from "../../Sahl/Atoms/Slider/Slider";

const ImageUploader = ({ file }) => {
  const { response, progress, error, uploaded, imgUrl } = useCloudainary(file);
  //const [fileUrl, setFileUrl] = useState("");
  //   const [progress, setProgress] = useState(0);

  // Transfrom images to  base64
  //   React.useEffect(() => {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.addEventListener("load", function (e) {
  //       setFileUrl(e.target.result);
  //     });
  //   }, [file]);

  // Upload Image to server
  console.log("Progres##", progress);
  console.log(response, "response");
  console.log(imgUrl, "Img");
  return (
    <>
      {uploaded ? <img src={imgUrl} alt="profile" width={100} /> : null}
      <Slider progress={progress} />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default ImageUploader;
