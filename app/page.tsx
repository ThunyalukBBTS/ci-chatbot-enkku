"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function Home() {

  // { id: 1, text: "Hi, Who are you?", sender: "user" },
  // { id: 2, text: "This AI chatbot has been developed to...", sender: "bot" },

  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState<string>("");
  var index = 0;

  const sendMessage = () => {
    if (textInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: textInput, sender: "user" },
        { id: prevMessages.length + 2, text: "BOT_LOADING", sender: "bot" }
      ]);
      index = messages.length + 2;
      console.log(index);
      setTextInput("");
    }
  };

  const setText = (value: string) => {
    setTextInput(value);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );



  return (
    <div className="bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white md:w-100 w-screen p-2 fixed left-0 top-0 h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="flex justify-between mt-3">
            <h2 className="text-2xl mb-4 mt-2 ms-5 font-bold">ENKKU | ChatBot</h2>
            <button onClick={toggleSidebar} className={`me-2 hover:cursor-pointer p-1 border-1 rounded-md border-gray-600 ${isSidebarOpen ? "d-none" : null}`}>
              <span className="material-icons flex justify-center items-center m-0 pt-1.5 px-1.5">
                close
              </span>
            </button>
          </div>
          <ul className="mt-5 ms-5 text-xl">
            <li className="mb-5 hover:text-gray-400 hover:cursor-pointer">
              <button type="button" onClick={() => router.push('/')}>
                Home
              </button>
            </li>
            <li className="mb-5 hover:text-gray-400 hover:cursor-pointer">
              <button type="button" onClick={() => router.push('/about')}>
                About us
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="bg-white shadow-xs z-2">
            <div className="flex items-center justify-between p-4 mx-auto max-w-screen-xl">
              <button
                className="p-2 justify-center items-center hover:cursor-pointer"
                onClick={toggleSidebar} // Toggle sidebar on menu click
              >
                <span
                  className="material-icons pt-1 px-1 text-orange-500 font-bold"
                  style={{ fontSize: "30px" }}
                >
                  menu
                </span>
              </button>
              <div className="items-center mx-auto">
                <img
                  src="https://www.en.kku.ac.th/web/wp-content/uploads/2021/06/Logo-web.png"
                  className="h-12"
                  alt="EN KKU Logo"
                />
              </div>
            </div>
          </header>

          {/* Chat Area */}
          <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
            <div className="max-w-screen-xl mx-auto">
              {messages.length !== 0 ? (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                      } mb-2`}
                  >
                    <div
                      className={`rounded-lg flex shadow ${msg.sender === "user" ? "bg-white text-gray-800" : "bg-white text-gray-800"
                        }`}
                    >
                      <div className="w-[5px] rounded-lg bg-orange-500"></div>
                      <div className="max-w-xs p-2 inputps-4">
                        {msg.text === "BOT_LOADING" && msg.sender === "bot" ? <div className="flex"><LoadingSpinner /><p className="ms-2">กรุณารอสักครู่</p></div> : msg.text}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="max-w-screen-xl mx-auto mt-[250px] h-full">
                  <div className="my-auto flex flex-col">
                    <div className="text-gray-800 text-4xl text-center">Welcome</div>
                    <p className="text-gray-800 text-xl text-center mt-2">
                      ยินดีต้อนรับเข้าสู่ ENKKU ChatBot
                    </p>
                  </div>
                  <div className="mt-[80px] max-w-screen-xl mx-auto border rounded-lg flex">
                    <input
                      type="text"
                      placeholder="พิมพ์คำถามของคุณที่นี่"
                      className="flex-1 p-2 ps-4 text-black border-gray-300 bg-gray-50 focus:outline-none"
                      onChange={(event) => setText(event.target.value)}
                    />
                    <button className="p-2 bg-orange-500 hover:bg-amber-700 hover:cursor-pointer duration-500 ease-in-out text-white rounded-lg" onClick={sendMessage}>
                      <span className="material-icons pt-1 px-1">send</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Message Input */}
          {messages.length !== 0 ? (
            <footer className="p-5 pb-5 bg-white shadow-md items-center">
              <div className="max-w-screen-xl mx-auto border rounded-lg flex">
                <input
                  type="text"
                  placeholder="พิมพ์คำถามของคุณที่นี่"
                  value={textInput}
                  className="flex-1 p-2 ps-4 text-black border-gray-300 bg-gray-50 focus:outline-none"
                  onChange={(event) => setText(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendMessage();
                    }
                  }}
                />
                <button className="p-2 bg-orange-500 hover:bg-amber-700 hover:cursor-pointer duration-500 ease-in-out text-white rounded-lg" onClick={sendMessage}>
                  <span className="material-icons pt-1 px-1">send</span>
                </button>
              </div>
            </footer>
          ) : null}
        </div>
      </div>
    </div>
  );
}
