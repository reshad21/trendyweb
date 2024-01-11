'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHandbagSimple } from "react-icons/pi";
const ResponsiveMenu = () => {
    const pathname = usePathname()

    console.log(pathname);

    return (
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
                        <Link href="/services" className={pathname == "/services" ? "text-orange-500 flex flex-col items-center justify-center" : "flex flex-col items-center justify-center gap-1 text-slate-500"}>
                            <IoSettingsOutline size={20} />
                            <span className="text-[10px]">Services</span>
                        </Link>
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
    );
};

export default ResponsiveMenu;