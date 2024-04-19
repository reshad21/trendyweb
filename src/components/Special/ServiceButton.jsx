import Link from "next/link";
import { AiOutlineSound } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCodeSlashSharp, IoRocketOutline } from "react-icons/io5";
const ServiceButton = () => {
    return (
        <>
            <ul className="menu menu-horizontal text-white p-0 m-[-7px]">
                <li>
                    <details >
                        <summary>Services</summary>
                        <ul className="text-slate-700 w-[580px] h-fit bg-white rounded-xl grid gap-3 grid-cols-2 justify-between">
                            <li>
                                <Link href="/digitalmarketing" className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><AiOutlineSound size={30} /></span>
                                    <div className="w-full">
                                        <span className="mb-4 font-bold text-[15px]">Digital Marketing</span>
                                        <p className="text-[12px]">Maximizing online presence through strategic promotion.</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/webdevelopment" className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><IoCodeSlashSharp size={30} /></span>
                                    <div className="w-full">
                                        <span className="mb-4 font-bold text-[15px]">Web Development</span>
                                        <p className="text-[12px]">Creating dynamic websites with coding expertise.</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><HiOutlineComputerDesktop size={30} /></span>
                                    <div className="w-full">
                                        <Link href="/" className="mb-4 font-bold text-[15px]">SEO Service</Link>
                                        <p className="text-[12px]">Boosting online presence through expert optimization</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><BsBarChart size={30} /></span>
                                    <div className="w-full">
                                        <Link href="/" className="mb-4 font-bold text-[15px]">SMO Service</Link>
                                        <p className="text-[12px]">Boosting Online Presence through Social Media Services</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><IoRocketOutline size={30} /></span>
                                    <div className="w-full">
                                        <Link href="/" className="mb-4 font-bold text-[15px]">Social Marketing</Link>
                                        <p className="text-[12px]">Promoting Brands Through Social Media Engagement.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-5">
                                    <span className="bg-slate-200 p-2 rounded-xl"><FaComputer size={30} /></span>
                                    <div className="w-full">
                                        <Link href="/" className="mb-4 font-bold text-[15px]">Website Optimization</Link>
                                        <p className="text-[12px]">Maximizing website performance for optimal results.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    );
};

export default ServiceButton;