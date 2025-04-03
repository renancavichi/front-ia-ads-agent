import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 pb-[150px] px-28 font-[family-name:var(--font-geist-sans)]">
      <Chat />
    </div>
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
