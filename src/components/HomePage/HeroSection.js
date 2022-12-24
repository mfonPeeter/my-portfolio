import { Fragment } from "react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

import Navigation from "./Navigation/Navigation";
import mfonImg from "../../assets/mfon.webp";

const HeroSection = () => {
  return (
    <Fragment>
      <header className="relative px-4 pb-10 bg-[#fdf2e9] md:h-screen">
        <Navigation />
        <div className="md:py-10 lg:px-10 xl:px-24">
          <div className="container mx-auto max-w-screen-lg flex flex-col-reverse items-center justify-between space-y-reverse space-y-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-8 xl:space-x-14 xl:ml-20">
            <div className="w-11/12 text-center bg-orange-200 shadow-[inset_0_0_50px_50px_#fdf2e9]">
              <h1 className="mb-3 text-3xl text-gray-800 font-bold uppercase sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hi, I'm Mfonobong Peter
              </h1>
              <p className="mb-8 max-w-xl flex text-lg text-center mx-auto text-gray-800 sm:text-xl md:text-lg lg:text-xl lg:mb-10">
                A focused Frontend Web Developer building the frontend of
                websites that leads to the success of the overall product
              </p>
              <a
                href="projects"
                className="inline-block px-12 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-xl text-white font-bold uppercase rounded-full outline-orange-700 transition-colors hover:from-orange-500 hover:to-orange-700 hover:outline-800 lg:px-16 lg:py-4"
              >
                Projects
              </a>
            </div>

            <div className="w-3/4 border-dotted border-4 border-orange-200 rounded-lg shadow-[inset_0_0_50px_50px_#fdf2e9] sm:w-3/5 sm:ml-6 md:w-1/2">
              <div className="bg-orange-200 rounded-lg">
                <img src={mfonImg} alt="Mfon" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden absolute top-1/2 flex-col space-y-4 -translate-y-1/2 px-2 py-4 bg-white rounded-full shadow-2xl sm:flex md:hidden lg:flex">
        <a
          href="linkedin"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsLinkedin size={28} />
        </a>
        <a
          href="twitter"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsTwitter size={28} />
        </a>
        <a
          href="github"
          className="p-3 inline-block rounded outline-orange-700 transition-colors hover:bg-orange-100"
        >
          <BsGithub size={28} />
        </a>
      </div>
    </Fragment>
  );
};

export default HeroSection;
