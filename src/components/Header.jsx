import { navData } from "@/data/navber";
import NavLink from "./NavLink";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-16 py-5 shadow-xl border-collapse ">
            <h1>Logo</h1>
            <ul className="flex">
                {
                    navData.map(({ path, title }) => (
                        <li key={path}>
                            <NavLink href={path} exact={path == "/"} activeClassName="text-orange-500" className="px-3 text-lg">
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <p>Social bar</p>
        </div>
    );
};

export default Header;