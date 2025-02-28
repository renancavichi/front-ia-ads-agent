'use client'

import { useState } from "react";

export default function Home() {

  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/ia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: message})
    })

    const data = await response.json()
    setChat([...chat, {message: message}, {message: data.response}])
    setMessage('')
  }

  return (
    <div className="flex flex-col items-center gap-6 pb-[150px] px-28 font-[family-name:var(--font-geist-sans)]">
      
      {chat.map((item, index) => (
        <div key={index} className="bg-zinc-700 p-4 rounded-lg text-white text-center">
          {item.message}
        </div>
      ))}
      
      <div className="fixed bottom-6 mx-auto bg-zinc-700 flex items-center justify-center p-4 rounded-lg text-white text-center gap-2">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-[600px] border border-zinc-900 rounded p-2 resize-none"></textarea>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
}
