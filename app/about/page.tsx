"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function About() {
    const router = useRouter()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        (
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

                        </main>


                    </div>
                </div>
            </div>
        )
    );
}