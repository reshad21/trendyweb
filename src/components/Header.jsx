import { navData } from "@/data/navber";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <ul className="flex">
                {
                    navData.map((item) => <li key={item.path}><Link href={item.path}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Header;