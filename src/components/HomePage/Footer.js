import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl pt-12 pb-8 px-4 text-gray-800 lg:pt-16 md:px-10 lg-pt-20">
      <div className="flex flex-col-reverse items-start justify-between space-y-reverse space-y-12 mb-10 sm:flex-row sm:space-y-0">
        <div>
          <h4 className="mb-4 text-2xl font-bold uppercase">Mfonobong Peter</h4>
          <p className="max-w-lg">
            A focused Frontend Web Developer, building the frontend of websites
            that leads to the success of the overall product
          </p>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h4 className="mb-4 text-2xl font-bold uppercase">Social</h4>
          <div className="flex space-x-4">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mfonpeeter/"
              className="inline-block transition-all hover:scale-110"
            >
              <BsLinkedin size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/mfonPeeter"
              className="inline-block transition-all hover:scale-110"
            >
              <BsTwitter size={24} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/mfonPeeter"
              className="inline-block transition-all hover:scale-110"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-8 text-center text-sm">
        <p>
          &copy; Copyright 2022. Made by{" "}
          <span>
            <a
              href="http://mfonpeter.netlify.app/"
              className="inlne-block font-bold underline"
            >
              Mfonobong Peter
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
