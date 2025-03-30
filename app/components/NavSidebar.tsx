"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavSidebar() {
    const router = useRouter();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-ful">
            {/* Sidebar */}
            <div
                className={`bg-orange-500 text-white md:w-100 w-screen p-2 fixed left-0 top-0 h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex justify-between mt-3">
                    <h2 onClick={() => router.push("/")} className="text-2xl mb-4 mt-2 ms-5 font-bold hover:cursor-pointer">ENKKU | ChatBot</h2>
                    <button onClick={toggleSidebar} className="me-2 hover:cursor-pointer p-1 rounded-md">
                        <span className="material-icons flex justify-center items-center m-0 pt-1.5 px-1">close</span>
                    </button>
                </div>
                <ul className="mt-5 ms-5 text-xl">
                    <li className="mb-5 hover:text-gray-400">
                        <button className="hover:cursor-pointer" type="button" onClick={() => router.push("/")}>
                            หน้าหลัก
                        </button>
                    </li>
                    <li className="mb-5 hover:text-gray-400">
                        <button className="hover:cursor-pointer" type="button" onClick={() => router.push("/about")}>
                            เกี่ยวกับเรา
                        </button>
                    </li>
                </ul>
            </div>

            {/* Navbar */}
            <header className="bg-white shadow-xs z-2">
                <div className="flex items-center justify-between py-4 mx-auto max-w-screen-xl">
                    <button className="justify-center items-center hover:cursor-pointer" onClick={toggleSidebar}>
                        <span className={`material-icons text-orange-600 flex justify-center items-center m-0 pt-1.5 px-1.5 ${isSidebarOpen ? "invisible" : ""
                            }`} style={{ fontSize: "30px" }}>
                            menu
                        </span>
                    </button>
                    <div className="items-center mx-auto hover:cursor-pointer" onClick={() => router.push("https://www.en.kku.ac.th/web/")}>
                        <img
                            src="https://www.en.kku.ac.th/web/wp-content/uploads/2021/06/Logo-web.png"
                            className="h-12"
                            alt="EN KKU Logo"
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}
