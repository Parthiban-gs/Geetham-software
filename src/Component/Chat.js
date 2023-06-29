import React, { useState } from 'react'
import ChatMessage from "./ChatMessage";

function Chat({ user }) {
  const [message, setMesaage] = useState([])
  const [text, setText] = useState('');
  const handleSubmit = () => {

  }
  return (
    <>

      <div className='d-flex align-item-center justify-content-center'>
        <h2 className='text-primary'>chat app</h2>

      </div>

      <div className='row mt-4'>
        <div className='col-xl4 xol-lg-4 col-sm-3 col-2'>
          <div className='col-xl-4 col-lg-4 col-sm-6 col-8 chat-message'>
            {
              message.map((message => <ChatMessage  {...message} user={user} />
              ))}
            <div className='d-flex mt-2'>
              <input type='text' className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
              <button type='primary' className='ms-3 ' onClick={handleSubmit}></button>

            </div>
          </div>
        </div>
      

      </div>
     
    </>
  )
}

  
export default Chat

          
