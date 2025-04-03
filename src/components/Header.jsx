export default function Header() {
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
        </div>
        </div>
    );
}