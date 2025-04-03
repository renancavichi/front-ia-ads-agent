'use client'

import Message from "@/components/Message";
import { useState, useEffect } from "react";

export default function Chat() {

  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('ola')

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch('http://localhost:4444/messages')
      const data = await response.json()
      setChat(data)
    }
    getMessages()
  },[])

  useEffect(() => {
    console.log(message)
  },[message])

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:4444/ia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: message})
    })

    const data = await response.json()
    setChat([...chat, {message: message, owner: 'user'}, {message: data.response, owner: 'bot'}])
    setMessage('')
  }

  return (
    <>
      {chat.map((item, index) => (
       <Message key={index} message={item.message} owner={item.owner} />
      ))}
      
      <div className="fixed bottom-6 mx-auto bg-zinc-700 flex items-center justify-center p-4 rounded-lg text-white text-center gap-2">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-[600px] border border-zinc-900 rounded p-2 resize-none"></textarea>
        <button style={styles.button} onClick={handleSubmit}>Enviar</button>
      </div>
    </>
  );
}

const styles = {
  button: {
    backgroundColor: '#456456',
    border: '1px solid #CCC',
    borderRadius: '5px',
    color: '#FFF',
    padding: '5px 10px',
    cursor: 'pointer'
  }
}
