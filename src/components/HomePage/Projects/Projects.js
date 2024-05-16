import { useState } from 'react';
import { ButtonSmall } from '../../UI/Button';
import {
  LaonDetails,
  BettershotzDetails,
  MfonAiDetails,
  LicaTestDetails,
  MPBlogDetails,
} from './ProjectsDetails';
import laonImg from '../../../assets/laon.webp';
import bettershotzImg from '../../../assets/bettershotz.webp';
import MfonAiImg from '../../../assets/mfon-ai.webp';
import blogImg from '../../../assets/blog.webp';
import licaImg from '../../../assets/dashboard-page.webp';

const Projects = () => {
  const [openLaonDetails, setOpenLaonDetails] = useState(false);
  const [openBettershotzDetails, setOpenBettershotzDetails] = useState(false);
  const [openMfonAiDetails, setOpenMfonAiDetails] = useState(false);
  const [openMPBlogDetails, setOpenMPBlogDetails] = useState(false);
  const [openLicaTestDetails, setOpenLicaTestDetails] = useState(false);

  const openLaonDetailsHandler = () => setOpenLaonDetails(preVal => !preVal);
  const openBettershotzDetailsHandler = () =>
    setOpenBettershotzDetails(preVal => !preVal);
  const openMfonAiDetailsHandler = () =>
    setOpenMfonAiDetails(preVal => !preVal);
  const openMPBlogDetailsHandler = () =>
    setOpenMPBlogDetails(preVal => !preVal);
  const openLicaTestDetailsHandler = () =>
    setOpenLicaTestDetails(preVal => !preVal);

  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal projects that I created from
          scratch based on my current skillset. Click on the live link to see
          the live version of the project. To find out more, click on More
          Details
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-y-14 px-4 md:gap-y-20">
        {/* PROJECT 1 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={laonImg}
              alt="Laon E-Commerce"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">Laon</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              Laon is an e-commerce platform that targets consumers wanting to
              purchase mobile devices and accessories at affordable prices. I
              took inspiration from sites such as Amazon, Jumia and Mi to create
              an amazing UI/UX. I made use of APIs such as Commerce js for the
              backend of the site, Stripe to handle payment, and Firebase to
              handle login authentication.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall link="https://elaon.netlify.app/" text="Live Link" />
              <button
                onClick={openLaonDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <LaonDetails
            openLaonDetails={openLaonDetails}
            openLaonDetailsHandler={openLaonDetailsHandler}
          />
        </div>

        {/* PROJECT 2 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">BetterShotz Clone</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              I re-created the homepage of{' '}
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://bettershotz.com/"
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
                >
                  BetterShotz website
                </a>
              </span>{' '}
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                JavaScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="http://bettershotz-clone.netlify.app/"
                text="Live Link"
              />
              <button
                onClick={openBettershotzDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <div className="flex row-start-1 items-end justify-center bg-white/50 rounded-xl md:row-start-auto">
            <img
              src={bettershotzImg}
              alt="Bettershotz"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <BettershotzDetails
            openBettershotzDetails={openBettershotzDetails}
            openBettershotzDetailsHandler={openBettershotzDetailsHandler}
          />
        </div>

        {/* PROJECT 3 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex items-end justify-center bg-white/50 rounded-xl">
            <img
              src={MfonAiImg}
              alt="Mfon.ai"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">Mfon.ai</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              This project originated from a take-home test given by a company
              during my job interview process. I chose to include it in my
              portfolio due to its impressive UI design and rich features.
              Leveraging the Claude API, I developed an application resembling
              ChatGPT.
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Next.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                TypeScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="https://mfon-ai.vercel.app/"
                text="Live Link"
              />
              <button
                onClick={openMfonAiDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <MfonAiDetails
            openMfonAiDetails={openMfonAiDetails}
            openMfonAiDetailsHandler={openMfonAiDetailsHandler}
          />
        </div>

        {/* PROJECT 4 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex flex-col">
            <h3 className="mb-2">Lica Test</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              This project was as a take-home test for a job interview. I
              included it in my portfolio for its impressive UI design and
              features. Using Clerk and the LinkedIn API, I built an app that
              lets authenticated users post to their LinkedIn accounts through
              my platform
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Next.js
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                TypeScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <ButtonSmall
                link="http://lica-world-test.vercel.app/"
                text="Live Link"
              />
              <button
                onClick={openLicaTestDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <div className="flex row-start-1 items-end justify-center bg-white/50 rounded-xl md:row-start-auto">
            <img
              src={licaImg}
              alt="Bettershotz"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <LicaTestDetails
            openLicaTestDetails={openLicaTestDetails}
            openLicaTestDetailsHandler={openLicaTestDetailsHandler}
          />
        </div>

        {/* PROJECT 5 */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-14">
          <div className="flex row-start-1 items-end justify-center bg-white/50 rounded-xl md:row-start-auto">
            <img
              src={blogImg}
              alt="Bettershotz"
              className="w-[90%] h-[95%] rounded-t-xl shadow-top-left-right xs:w-[70%]"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2">MP. Blog</h3>
            <p className="mb-4 text-gray-800 md:text-lg">
              The project aims to implement JWT authentication, with a frontend
              blog application developed alongside. Drawing inspiration from
              Stripe's authentication pages, I've replicated their design.{' '}
              <span className="block font-semibold">
                Note: Still in development, no live link yet.
              </span>
            </p>
            <div className="grid grid-cols-2 gap-1 mb-4 text-[14.5px] font-semibold xs:grid-cols-3 lg:grid-cols-4 xl:flex">
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                React
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                TypeScript
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Tailwind CSS
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Python
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                Flask
              </span>
              <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
                PostgreSQL
              </span>
            </div>
            <div className="grow shrink" />
            <div className="flex flex-col space-y-2 xs:flex-row xs:space-x-2 xs:space-y-0">
              <button
                onClick={openMPBlogDetailsHandler}
                className="relative px-6 py-2 text-white font-bold uppercase bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-zinc-500 after:to-zinc-700 after:rounded-full after:-z-10 after:duration-500 hover:from-zinc-500 hover:to-zinc-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.3] hover:after:scale-y-[1.3] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate"
              >
                More Details
              </button>
            </div>
          </div>
          <MPBlogDetails
            openMPBlogDetails={openMPBlogDetails}
            openMPBlogDetailsHandler={openMPBlogDetailsHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
