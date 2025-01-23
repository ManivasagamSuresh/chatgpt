import React, { useRef } from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_END_POINT;
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/upload");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

function Upload({ setImg }) {
  const uploadref = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImg((prev) => ({ ...prev, isLoading: false, dbData: res }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
    setImg((prev) => ({ ...prev, isLoading: true }));
  };

  return (
    <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey} authenticator={authenticator}>
      <IKUpload
        fileName="test-upload.png"
        useUniqueFileName={true}
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        style={{ display: "none" }}
        ref={uploadref}
      />
      <label onClick={() => uploadref.current.click()}>
        <img src="/media/attachment.png" alt="" />
      </label>
    </IKContext>
  );
}

export default Upload;
