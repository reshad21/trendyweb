import { navData } from "@/data/navber";
import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-[#4039D4]">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
                <h1>Logo</h1>
                <ul className="flex">
                    {
                        navData.map(({ path, title }) => (
                            <li key={path} className="text-white">
                                <NavLink href={path} exact={path == "/"} activeClassName="text-orange-500" className="px-3 text-sm">
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <Link href="/" class="bg-gradient-to-r from-[#ee0979] from-10% via-[#ff6a00] via-70% to-[#ee0979] to-90% shadow-lg px-8 py-3 text-white rounded-xl font-semibold">Contact Us</Link>
                </p>
            </div>
        </div>
    );
};

export default Header;