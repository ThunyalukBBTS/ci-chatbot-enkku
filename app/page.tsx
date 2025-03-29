"use client";
import { useState } from "react";
import NavSidebar from "@/app/components/NavSidebar";

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    if (textInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: textInput, sender: "user" },
        { id: prevMessages.length + 2, text: "BOT_LOADING", sender: "bot" },
      ]);
      setIsLoading(true);
      handleSubmit(textInput);
      setTextInput("");
    }
  };


  const handleSubmit = async (query: string) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId); // Clear timeout if request completes

      const data = await res.json();

      if (data) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.text === "BOT_LOADING" ? { ...msg, text: data.answer } : msg
          )
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.text === "BOT_LOADING" ? { ...msg, text: "ERROR" } : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };


  const LoadingSpinner = () => (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <NavSidebar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            {messages.length !== 0 ? (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
                  <div className={`rounded-lg flex shadow ${msg.sender === "user" ? "text-white bg-orange-500" : "text-gray-800 bg-white"}`}>
                    {
                      msg.sender === "user" ? null : <div className={`w-[5px] rounded-lg ${msg.text === "ERROR" ? "bg-red-500" : "bg-orange-500"}`}></div>
                    }
                    <div className="max-w-xs p-2 text-warp break-words">{msg.text === "BOT_LOADING" ? <div className="flex"><LoadingSpinner /><p className="ms-2 text-orange-600">กรุณารอสักครู่</p></div> : msg.text === "ERROR" ?
                      <div className="flex text-red-600"><span className="material-icons">
                        error
                      </span><p className="mx-2">เกิดข้อผิดพลาด กรุณาลองใหม่ภายหลัง</p></div> : msg.text}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="max-w-screen-xl mx-auto mt-[10px] h-full">
                <div className="my-auto flex flex-col">
                  <img className="w-[500px] mx-auto" src="/chatbot.png" alt="" />
                  <div className="text-gray-800 text-4xl text-center">Welcome</div>
                  <p className="text-gray-800 text-xl text-center mt-2">ยินดีต้อนรับเข้าสู่ ENKKU ChatBot</p>
                </div>
                <form
                  className="mt-[80px] max-w-screen-xl mx-auto border rounded-lg flex shadow-xs"
                  onSubmit={(event) => {
                    event.preventDefault();
                    sendMessage();
                  }}
                >
                  <input
                    type="text"
                    placeholder="พิมพ์คำถามของคุณที่นี่"
                    value={textInput}
                    disabled={isLoading}
                    className="flex-1 p-2 ps-4 rounded-lg text-black border-gray-300 bg-gray-50 focus:outline-none"
                    onChange={(event) => setTextInput(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-orange-500 hover:bg-amber-700 text-white rounded-lg"
                    disabled={isLoading}
                  >
                    <span className="material-icons pt-1 px-1">send</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </main>
        {messages.length !== 0 ? <footer className="p-5 pb-24 bg-white shadow-md items-center">
          <form
            className="max-w-screen-xl mx-auto border rounded-lg flex shadow-xs"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              placeholder="พิมพ์คำถามของคุณที่นี่"
              value={textInput}
              disabled={isLoading}
              className="flex-1 p-2 ps-4 rounded-lg text-black border-gray-300 bg-gray-50 focus:outline-none"
              onChange={(event) => setTextInput(event.target.value)}
            />
            <button
              type="submit"
              className={`p-2 ${isLoading ? "bg-gray-600" : "bg-orange-500 hover:bg-amber-700"}  text-white rounded-lg`}
              disabled={isLoading}
            >
              <span className="material-icons pt-1 px-1">{isLoading ? "stop_circle" : "send"}</span>
            </button>
          </form>
        </footer> : null}

      </div>
    </div>
  );
}
