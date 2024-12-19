import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useConversation from '../../zustand/useConversation'
import useSendMessage from '../../hooks/useSendMessage';
function MessageInput() {
	const [message,setMessage]=useState("");
	const {loading,sendMessage}= useSendMessage();
	const handleSubmit=async(e)=>{
		e.preventDefault();
		if(!message)
			return;
		await sendMessage(message);
		setMessage("");
	}

  return (
    <form className='px-4 my-3 fixed bottom-0  w-full ' onSubmit={handleSubmit}>
			<div className='w-full relative '>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading?<spam className="loading loading-spinner"></spam>:<BsSend />}
				</button>
			</div>
		</form>
  )
}

export default MessageInput