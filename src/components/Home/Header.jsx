import websiteLogo from "@/assets/mainlogo-removebg-preview.png";
import { navData } from "@/data/navber";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import ServiceButton from "../Special/ServiceButton";
const Header = () => {
    return (
        <div className="md:block sticky top-0 z-50 bg-[#4039D4]">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3 md:py-4 md:px-8">
                <Link href="/">
                    <Image src={websiteLogo} className="w-[100px] h-auto object-fill" />
                </Link>
                <ul className="hidden md:flex">
                    {
                        navData.map(({ path, title }) => (
                            <li key={path} className="text-white">
                                <NavLink href={path} exact={path == "/"} activeClassName="text-orange-500" className="px-3 text-sm">
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li><ServiceButton /></li>
                </ul>
                <p>
                    <Link href="/contact" className="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ff6a00] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold text-[13px] md:text-[16px] hover:bg-gradient-to-r hover:from-[#fff] hover:from-10% hover:via-[#fff] hover:via-70% hover:to-[#fff] hover:text-slate-800">Contact Us</Link>
                </p>
            </div>
        </div>
    );
};

export default Header;