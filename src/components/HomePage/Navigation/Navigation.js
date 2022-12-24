import { MdMail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import NavigationList from "./NavigationList";
import logo from "../../../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="pt-3 mb-10">
      <div className="flex items-center justify-between py-1 pl-6 pr-4 w-11/12 bg-white rounded-full mx-auto shadow-xl">
        <a href="home" className="outline-orange-700">
          <img src={logo} alt="My Logo" className="w-14 h-14" />
        </a>

        <ul className="hidden items-center space-x-12 font-semibold text-lg text-gray-800 md:flex">
          <NavigationList text="Home" />
          <NavigationList text="About" />
          <NavigationList text="Projects" />
          <a
            href="projects"
            className="flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-full outline-orange-700 transition-colors hover:from-orange-500 hover:to-orange-700"
          >
            <li>Contact</li>
            <MdMail color="white" />
          </a>
        </ul>

        <div className="pr-4 md:hidden ">
          <RxHamburgerMenu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
