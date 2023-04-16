import { ButtonSmall } from '../UI/Button';
import laonImg from '../../assets/laonImg.png';
import bettershotzImg from '../../assets/bettershotzImg.png';

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal projects that I created from
          scratch based on my current skillset. Click on the live link to find
          out more about each project.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-6 px-2 mb-16 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={laonImg} alt="Laon E-commerce" className="w-full" />
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">Laon</h3>
          <p className="max-w-lg mb-2 text-gray-800 md:text-lg">
            Laon is an e-commerce platform that targets consumers wanting to
            purchase mobile devices and accessories at affordable prices. I took
            inspiration from sites such as Amazon, Jumia and Mi to create an
            amazing UI/UX. This platform was built from scratch using my
            frontend knowledge and skills. I made use of APIs such as Commerce
            js for the backend of the site, Stripe to handle payment, and
            Firebase to handle login authentication. This site is responsive.
          </p>
          <p className="mb-8 text-gray-800 md:text-lg">
            <span className="text-lg font-semibold">Tools Used:</span> HTML,
            Tailwind CSS, React, Git, GitHub, Commerce js API, Firebase API,
            Stripe API, Netlify
          </p>

          <ButtonSmall link="https://elaon.netlify.app/" text="Live Link" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col-reverse items-center justify-between space-y-reverse space-y-6 px-2 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">Bettershotz Clone</h3>
          <p className="max-w-lg mb-2 text-gray-800 md:text-lg">
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
          <p className="mb-8 text-gray-800 md:text-lg">
            <span className="text-lg font-semibold">Tools Used:</span> HTML,
            Tailwind CSS, React, Git, GitHub, Netlify
          </p>

          <ButtonSmall
            link="http://bettershotz-clone.netlify.app/"
            text="Live Link"
          />
        </div>
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={bettershotzImg} alt="BetterShotz" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
