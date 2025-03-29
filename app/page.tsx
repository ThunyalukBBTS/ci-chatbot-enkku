"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, Who are you?", sender: "user" },
    { id: 2, text: "This AI chatbot has been developed to This AI chatbot has been developed toThis AI chatbot has been developed toThis AI chatbot has been developed toThis AI chatbot has been developed toThis AI chatbot has been developed toThis AI chatbot has been developed to ...", sender: "bot" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
    { id: 3, text: "Thank You :)", sender: "user" },
  ]);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <header className=" bg-white shadow-md">
          <div className="flex items-center justify-between p-4 mx-auto max-w-screen-xl">
            <button className="p-2 justify-center items-center">
              <span className="material-icons pt-1 px-1 text-orange-500 font-bold" style={{ fontSize: "30px" }}>menu</span>
            </button>
            <div className="items-center mx-auto">

              <img src="https://www.en.kku.ac.th/web/wp-content/uploads/2021/06/Logo-web.png" className="h-12" alt="EN KKU Logo" />
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
              >
                <div
                  className={`rounded-lg flex shadow ${msg.sender === "user" ? "bg-white text-black" : "bg-white text-black"
                    }`}
                >
                  <div className={`w-[5px] rounded-lg bg-orange-500`}>
                  </div>
                  <div className="max-w-xs p-2 ps-4">

                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Message Input */}
        <footer className="p-5 pb-5 bg-white shadow-md items-center">
          <div className="max-w-screen-xl mx-auto border rounded-lg flex">
            <input
              type="text"
              placeholder="Type a new message here"
              className="flex-1 p-2 ps-4 text-black border-gray-300 bg-gray-50 focus:outline-none"
            />
            <button className="p-2 bg-orange-500 hover:bg-amber-700 hover:cursor-pointer duration-500 ease-in-out text-white rounded-lg">
              <span className="material-icons pt-1 px-1">
                send
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}