import React, { useEffect, useRef } from 'react'

function NewPromptForm() {

    const endref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (endref.current) {
      endref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
        <div className="endChat" ref={endref}></div>
        <form action="" className='NewPromptForm_form'>
        <label htmlFor="file">
            <img src="/media/attachment.png" alt="" />
        </label>
        <input type="file" name="" id="file" multiple={false} hidden/>
        <input type="text" placeholder='Ans me anything...' />
        <button>
            <img src="/media/arrow.png" alt="" />
        </button>
        </form>
    </>
  )
}

export default NewPromptForm