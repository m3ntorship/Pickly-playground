import { useEffect, useState } from "react";
import axios from "axios";

//custom hook:
const useCloudainary = (file) => {
  const [response, setResponse] = useState({});
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const apiUrl = `https://api.cloudinary.com/v1_1/diokf5gdm/image/upload`;
  const source = axios.CancelToken.source();

  useEffect(() => {
    //initiate form data object, to attach form data TA DA!
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "wix71ntk");

    //axios post request
    axios
      .post(apiUrl, data, {
        cancelToken: source.token,
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      })
      .then((resp) => {
        //adding resp from request to our state to re-render
        const data = resp.data;
        setResponse(data);
        setImgUrl(data.secure_url);
        //resp sent back means request sent with OK and img uploaded.
        setUploaded(true);
      })
      .catch((err) => {
        setError(err);
        if (axios.isCancel(err)) {
          return "axios request cancelled";
        }
        return err;
      });
  }, [file]);
  return { response, progress, error, uploaded, imgUrl };
};

export default useCloudainary;
