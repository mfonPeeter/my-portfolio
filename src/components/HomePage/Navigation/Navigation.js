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
          <NavigationList link="#home" text="Home" />
          <NavigationList link="#about" text="About" />
          <NavigationList link="#projects" text="Projects" />
          <a
            href="mailto:godimfon@gmail.com"
            className="relative flex items-center space-x-1 px-5 py-2 text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-full  outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full after:-z-10 after:duration-500 hover:from-orange-500 hover:to-orange-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
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
