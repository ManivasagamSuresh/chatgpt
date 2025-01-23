import React, { useEffect, useRef, useState } from "react";
import Upload from "../Upload/Upload";
import { IKImage } from "imagekitio-react";

function NewPromptForm() {
  const endref = useRef(null);

  const [img, setImg] = useState({
    isLoading:false,
    error:'',
    dbData:{}
  });

  useEffect(() => {
    if (endref.current) {
      endref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
    {img.isLoading && <div className=""> Loading...</div>}
    { img.dbData?.filePath && (
      <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_END_POINT }
      path= {img.dbData?.filePath}
      width='340'
      transformation={[{width:340}]}
    />
    )}
      <div className="endChat" ref={endref}></div>
      <form action="" className="NewPromptForm_form">
       

        <Upload setImg={setImg}/>
        <input type="file" name="" id="file" multiple={false} hidden />
        <input type="text" placeholder="Ans me anything..." />
        <button>
          <img src="/media/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
}

export default NewPromptForm;
