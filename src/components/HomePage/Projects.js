import { ButtonSmall } from "../UI/Button";
import laonImg from "../../assets/laonImg.png";
import bettershotzImg from "../../assets/bettershotzImg.png";

const Projects = () => {
  return (
    <section className="pt-16 pb-16 bg-[#fdf2e9] lg-pt-20">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-6 px-2 mb-16 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={laonImg} alt="Laon E-commerce" className="w-full" />
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">Laon</h3>
          <p className="max-w-lg mb-8 text-gray-800 md:text-lg">
            Laon is a e-commerce site based on Mi products with functionalities
            which I created from scratch using the frontend tools I know
          </p>
          <ButtonSmall link="#project-1" text="Case Study" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col-reverse items-center justify-between space-y-reverse space-y-6 px-2 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">Bettershotz Clone</h3>
          <p className="max-w-lg mb-8 text-gray-800 md:text-lg">
            I re-created the frontend of Boreal Coffee's official web app
            because I got attracted to their beautiful UI. It was a great
            experience for me to build the entire frontend.
          </p>
          <ButtonSmall link="#project-1" text="Case Study" />
        </div>
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={bettershotzImg} alt="BetterShotz" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
