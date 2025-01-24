import React, { useEffect, useRef, useState } from "react";
import Upload from "../Upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/Gemini";
import Markdown from "react-markdown";

function NewPromptForm() {
  const endref = useRef(null);
  const [prompt,setPromt] = useState('')
  const [promptRes,setPromptRes] = useState('')

  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });

  async function addPromt(text) {
    setPromt(text);
    // const prompt = 
    const ans = await model.generateContent(text);
    console.log(ans.response.text());
    setPromptRes(ans.response.text());
    return true
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const text = e.target.prompt.value
    if(!text) return
    const response = await addPromt(text);
  if (response) {
    e.target.prompt.value = '';
  }

  }

  useEffect(() => {
    if (endref.current) {
      endref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [prompt, promptRes, img.dbData]);

  return (
    <>
      {img.isLoading && <div className=""> Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_END_POINT}
          path={img.dbData?.filePath}
          width="340"
          transformation={[{ width: 340 }]}
        />
      )}
      {
        prompt && <div className="ChatPage_message ChatPage_message-user NewPromptForm_userPromt">{prompt}</div>
      }
      {
        promptRes && <div className="ChatPage_message NewPromptForm_PromptResponse">
          <Markdown>{promptRes}</Markdown>
          </div>
      }
      <div className="endChat" ref={endref}></div>
      <form action="" className="NewPromptForm_form" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input type="file" name="" id="file" multiple={false} hidden />
        <input type="text" name="prompt" placeholder="Ank me anything..." />
        <button type="submit">
          <img src="/media/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
}

export default NewPromptForm;
