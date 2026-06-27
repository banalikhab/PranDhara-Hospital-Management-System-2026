import React from 'react'

const MessageForm = () => {
  return (
    <>
      <div className="mform">
        <h1>Send Us Message</h1>
        <input type="text" placeholder='Enter your Name' required={true}/>
        <input type="email" placeholder='Enter your Email' required={true}/>
        <textarea placeholder='Enter your Message' name='message' rows={5}></textarea>
        <button className='btn'>Send Message</button>
      </div>
    </>
  )
}

export default MessageForm