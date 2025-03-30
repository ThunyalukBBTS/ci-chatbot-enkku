"use client";
import NavSidebar from "@/app/components/NavSidebar";
import ProfileCard from "@/app/components/profileCard"

export default function About() {
    return (
        (
            <div className="h-screen bg-gray-100">
                <div className="flex flex-col">
                    <NavSidebar />
                    <main className="flex-1 p-4 bg-gray-100 items-center justify-center">
                        <h1 className="text-gray-900 text-3xl font-bold text-center">เกี่ยวกับเรา</h1>
                        <h1 className="max-w-screen-xl md:max-w-screen-md lg:max-w-screen-xl mx-auto text-gray-900 text-xl text-center">เว็บไซต์นี้เป็น Mini project ในรายวิชา<br /><b>EN813307 Computational Intelligence</b><br />ปีการศึกษา 2567 มีสมาชิกดังนี้</h1>
                        <div className="max-w-screen-xl md:max-w-screen-md lg:max-w-screen-xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <ProfileCard id="653040128-1" name="นายธัญลักษณ์ ศศิวรินทร์กุล" imageUrl="./BB.png" contact="thunyaluk.sa@kkumail.com" />
                            <ProfileCard id="653040138-8" name="นายพีรวัส หารพรม" imageUrl="./P.png" contact="peerawat.h@kkumail.com" />
                            <ProfileCard id="653040454-8" name="นายธีรเทพ ป้องที" imageUrl="./F.png" contact="teeratep.p@kkumail.com" />
                            <ProfileCard id="653040622-3" name="นายธนภัทร ศิริวงศ์ศาล" imageUrl="./W.png" contact="tanapat.sir@kkumail.com" />
                        </div>
                        <h1 className="text-gray-900 mt-5 text-3xl font-bold text-center">โครงสร้างการพัฒนาเว็บไซต์</h1>
                        <div className="max-w-screen-xl text-xl text-black mx-auto grid grid-cols-1 lg:grid-cols-3">
                            <div className=" col-span-1 m-2 justify-center text-center">
                                <div className="p-2 md:flex md:flex-col ">
                                    <div className="text-orange-500"><b>Front-end</b> (web application)</div>
                                    <div className="my-2"><img className="mx-auto" src="https://skillicons.dev/icons?i=nextjs,ts,tailwind" /></div>
                                    <ul className="text-[18px]">
                                        <li>NextJs</li>
                                        <li>TypeScript</li>
                                        <li>TailwindCSS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" col-span-1 m-2 justify-center text-center">
                                <div className="p-2 md:flex md:flex-col ">
                                    <div className="text-orange-500"><b>Back-end</b>  (RAG and API)</div>
                                    <div className="my-2 flex justify-center">
                                        <img className="" src="https://skillicons.dev/icons?i=py,flask" />
                                        <img src="./open_router.jpg" className="h-[50px] w-fit ps-2" />
                                        <img src="https://chathub.gg/_next/image?url=https%3A%2F%2Fapp.chathub.gg%2Flogos%2Fllama.png&w=256&q=75" className="h-[50px] w-fit ps-2" />
                                        <img src="https://yt3.googleusercontent.com/MopgmVAFV9BqlzOJ-UINtmutvEPcNe5IbKMmP_4vZZo3vnJXcZGtybUBsXaEVxkmxKyGqX9R=s900-c-k-c0x00ffffff-no-rj" className="h-[50px] w-fit ps-2" />
                                    </div>
                                    <ul className="text-[18px]">
                                        <li>Python</li>
                                        <li>FlaskAPI - API connector</li>
                                        <li>Open router AI - model provider</li>
                                        <li>Llama 3.3 70b - model</li>
                                        <li>OpenAI - model library</li>
                                        <li>LangChain - LLM library</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" col-span-1 m-2 justify-center text-center">
                                <div className="p-2 md:flex md:flex-col ">
                                    <div className="text-orange-500"><b>Deployment</b> </div>
                                    <div className="my-2 flex justify-center">
                                        <img className="" src="https://skillicons.dev/icons?i=vercel,azure,github,docker" />

                                    </div>
                                    <ul className="text-[18px]">
                                        <li>Vercel - web hosting</li>
                                        <li>Azure - container instance</li>
                                        <li>GitHub - version control</li>
                                        <li>Docker - container builder</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        )
    );
}