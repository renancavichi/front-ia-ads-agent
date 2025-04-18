'use client'
import { useAuthStore } from "@/stores/authStore";

export default function Header() {

    const { userName, isLogged, login} = useAuthStore()

    return (
        <div className="flex justify-between items-center bg-gray-800 p-4">
        <h1 className="text-white text-2xl">Chatbot</h1>
        <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
            </button>
            { isLogged ? <p>User Logged: {userName}</p> 
            : <button onClick={() => login('renancavichi', 'http://github.com/renancavichi.png', '@#$FW#$%WFD@%$@#$@DFS@#REFX')}>Logar</button>}
        </div>
        </div>
    );
}