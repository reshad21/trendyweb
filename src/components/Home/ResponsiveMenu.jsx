'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { AiOutlineDollar, AiOutlineSound } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoCodeSlashSharp, IoRocketOutline, IoSettingsOutline } from "react-icons/io5";
import { PiHandbagSimple } from "react-icons/pi";
const ResponsiveMenu = () => {
    const pathname = usePathname()

    const [toggle, setToggle] = useState(false);
    const handleServices = (value) => {
        setToggle(value);
    }
    console.log(toggle);

    return (
        <>
            {
                toggle && <div className="fixed bottom-12 w-full h-fit z-40 md:hidden">
                    <ul className="text-slate-700 w-full h-fit bg-slate-400 rounded-xl grid gap-3 grid-cols-2 justify-between p-3 pb-6">
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><AiOutlineSound size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">Digital Marketing</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><IoCodeSlashSharp size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">Web Development</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><HiOutlineComputerDesktop size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">SEO Service</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><BsBarChart size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">SMO Service</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><IoRocketOutline size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">Social Marketing</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><FaComputer size={10} /></span>
                                <div className="w-full">
                                    <Link href="/" className="mb-4 font-semibold text-[12px]">Website Optimization</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2">
                                <span className="bg-slate-200 p-2 rounded-xl"><AiOutlineDollar size={10} /></span>
                                <div className="w-full">
                                    <Link href="/PpcServicePage" className="mb-4 font-semibold text-[12px]">PPC Service</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            }

            <div className='fixed bottom-0 z-50 bg-slate-300 py-3 rounded-t-lg w-full h-fit px-4 md:hidden'>
                <div className="">
                    <ul className="flex justify-between items-center">
                        <li>
                            <Link href="/" className={pathname == "/" ? "text-orange-500 flex flex-col items-center justify-center" : "flex flex-col items-center justify-center gap-1 text-slate-500"}>
                                <HiOutlineHome size={20} />
                                <span className="text-[10px]">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={pathname == "/about" ? "text-orange-500 flex flex-col items-center justify-center" : "flex flex-col items-center justify-center gap-1 text-slate-500"}>
                                <IoIosPeople size={20} />
                                <span className="text-[10px]">About</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => handleServices(!toggle)} className={`{$toggle} ? "text-orange-500 flex flex-col items-center justify-center":"flex flex-col items-center justify-center gap-1 text-slate-500"`}
                            >
                                <IoSettingsOutline size={20} />
                                <span className="text-[10px]">Services</span>
                            </button>
                        </li>
                        <li>
                            <Link href="/portfolio" className={pathname == "/portfolio" ? "text-orange-500 flex flex-col items-center justify-center" : "flex flex-col items-center justify-center gap-1 text-slate-500"}>
                                <PiHandbagSimple size={20} />
                                <span className="text-[10px]">Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={pathname == "/contact" ? "text-orange-500 flex flex-col items-center justify-center" : "flex flex-col items-center justify-center gap-1 text-slate-500"}>
                                <FaRegEnvelope size={20} />
                                <span className="text-[10px]">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ResponsiveMenu;