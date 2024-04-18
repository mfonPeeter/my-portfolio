import { BsX, BsFillCheckCircleFill } from 'react-icons/bs';
import { ButtonSmall } from '../../UI/Button';
import {
  LaonDetailsOverlay,
  BettershotzDetailsOverlay,
} from './ProjectsOverlay';

export const LaonDetails = ({ openLaonDetails, openLaonDetailsHandler }) => {
  return (
    <>
      <LaonDetailsOverlay
        openLaonDetails={openLaonDetails}
        openLaonDetailsHandler={openLaonDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openLaonDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openLaonDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Laon</h3>
            <span className="font-semibold text-lg">2022</span>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            building Laon.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Integrated CommerceJS API to manage backed operations for the
                e-commerce site, including product fetching, cart management,
                and cart refreshing.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Implemented a skeleton framework to enhance user experience
                during page reloads and compensate for CommerceJS lag.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Incorporated Stripe payment gateway into CommerceJS for seamless
                payment processing.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Integrated Firebase for secure login authentication on the
                website.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Implemented React Context for automatic user logout after one
                hour of inactivity.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilized Tailwind to ensure responsive design across various
                screen sizes.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Employed React Context for efficient state management across
                multiple components.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Integrated React Router to facilitate routing functionalities
                within the application.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Developed custom hooks to efficiently reuse logic across
                different React components.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Successfully implemented React Forms to streamline and manage
                form submission processes.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Deployed the e-commerce site on Netlify and established
                continuous deployment practices.
              </span>
            </li>
          </ul>
          <div className="w-full xs:flex">
            <ButtonSmall link="https://elaon.netlify.app/" text="Live Link" />
          </div>
        </div>
      </aside>
    </>
  );
};

export const BettershotzDetails = ({
  openBettershotzDetails,
  openBettershotzDetailsHandler,
}) => {
  return (
    <>
      <BettershotzDetailsOverlay
        openBettershotzDetails={openBettershotzDetails}
        openBettershotzDetailsHandler={openBettershotzDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openBettershotzDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openBettershotzDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">BetterShotz Clone</h3>
            <span className="font-semibold text-lg">2022</span>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            cloning BetterShotz Homepage.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Skillfully cloned the homepage of Bettershotz website, ensuring
                pixel-perfect replication and representation of the original
                design elements and functionalities.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Employed Tailwind CSS framework to craft a visually stunning and
                highly responsive website that effortlessly adapts to various
                screen sizes and devices, enhancing user experience and
                engagement.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Introduced an image comparison slider for visual impact.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Deployed the site on Netlify and integrated continuous
                deployment
              </span>
            </li>
          </ul>
          <div className="w-full xs:flex">
            <ButtonSmall
              link="http://bettershotz-clone.netlify.app/"
              text="Live Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
