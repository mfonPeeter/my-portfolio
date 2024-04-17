import { BsFillCheckCircleFill } from 'react-icons/bs';

const VolunteerExp = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Volunteer Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some voluntary work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col p-6 bg-white rounded-3xl shadow-md border transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">George's Work</span>
              <span className="font-normal">March 2023 - April 2023</span>
            </div>
            <span className="text-lg">Frontend Developer</span>
            <span>Nigeria</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilize ReactJS and Tailwind CSS to convert Figma mockup designs
                into codes
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Created React components for the landing page, and
                authentication pages such as Login, Sign Up, and Forgot
                Password.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilize Tailwind CSS to make all the pages responsive across
                multiple screen sizes.
              </span>
            </li>
          </ul>
          <div className="grow shrink" />
          <div className="grid grid-cols-2 gap-1 text-[14.5px] font-semibold xs:flex">
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
        </div>
      </div>
    </section>
  );
};

export default VolunteerExp;
