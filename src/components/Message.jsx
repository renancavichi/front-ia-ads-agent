export default function Message({message, owner}) {
  return (
    <div className="">
        <div className={`${owner === 'bot' ? 'bg-zinc-700 ml-auto' : `bg-blue-900 mr-auto`} max-w-[500px] p-4 rounded-lg text-white text-center` }>
            {message}
        </div>
    </div>
    
  )
}
