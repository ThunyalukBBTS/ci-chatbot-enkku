"use client";
import { useState } from "react";

export default function About() {


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

            </div>
        </div>
    );
}