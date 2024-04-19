import { BsX, BsFillCheckCircleFill } from 'react-icons/bs';
import { ButtonSmall, ButtonSmallZinc } from '../../UI/Button';
import {
  LaonDetailsOverlay,
  BettershotzDetailsOverlay,
  MfonAiDetailsOverlay,
  MPBlogDetailsOverlay,
} from './ProjectsOverlay';
import responseBodyImg from '../../../assets/response-body.webp';
import errorImg from '../../../assets/error.webp';

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

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall link="https://elaon.netlify.app/" text="Live Link" />
            <ButtonSmallZinc
              link="https://github.com/mfonPeeter/laon-e_commerce"
              text="GitHub Link"
            />
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

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall
              link="http://bettershotz-clone.netlify.app/"
              text="Live Link"
            />
            <ButtonSmallZinc
              link="https://github.com/mfonPeeter/bettershotz-website-clone"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export const MfonAiDetails = ({
  openMfonAiDetails,
  openMfonAiDetailsHandler,
}) => {
  return (
    <>
      <MfonAiDetailsOverlay
        openMfonAiDetails={openMfonAiDetails}
        openMfonAiDetailsHandler={openMfonAiDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openMfonAiDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openMfonAiDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">Mfon.ai</h3>
            <span className="font-semibold text-lg">2024</span>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my process in
            building Mfon.ai.
          </p>
          <ul className="flex flex-col space-y-2 mb-8">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>I made use of Next.js 14 app router for this project</span>
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
                Implemented scroll-down functionality on a button to allow users
                to immediately scroll down to the most recent response when
                scrolling up.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I leveraged route handlers in Next.js 14 to write server-side
                code, focusing on implementing logic for a POST request to the
                Claude API.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>Deployed the site on Vercel</span>
            </li>
          </ul>

          <div>
            <h4 className="mb-2 text-xl font-semibold">Things to Note</h4>
            <ul className="flex flex-col space-y-4 mb-8">
              <li className="flex space-x-2 max-w-3xl">
                <div className="mt-1">
                  <BsFillCheckCircleFill color="orange" size="15" />
                </div>
                <div>
                  <span className="inline-block mb-2">
                    In the request body, the{' '}
                    <span className="font-semibold">max_tokens</span> parameter
                    is set to <span className="font-semibold">20</span> to limit
                    the number of tokens returned by the Claude API. This is
                    because I'm currently using the free tier of the Claude API
                    and want to avoid exceeding my usage limits for this
                    personal project
                  </span>
                  <div className="flex justify-center w-full">
                    <img
                      src={responseBodyImg}
                      alt="Claude Response Options"
                      className="w-full rounded-xl xs:w-[90%] sm:w-[70%] md:w-[60%]"
                    />
                  </div>
                </div>
              </li>
              <li className="flex space-x-2 max-w-3xl">
                <div className="mt-1">
                  <BsFillCheckCircleFill color="orange" size="15" />
                </div>
                <div>
                  <span className="inline-block mb-2">
                    Setting <span className="font-semibold">max_tokens</span> to{' '}
                    <span className="font-semibold">20</span> means that the
                    Claude API will not return the complete answer if the token
                    limit is exceeded. In such cases, an error message stating
                    <span className="font-semibold">
                      {' '}
                      "Max token reached. Please simplify your prompt."
                    </span>{' '}
                    will be returned. Seeing this error message shouldn't cause
                    concern, as there's nothing wrong with the application.
                  </span>
                  <div className="flex justify-center w-full">
                    <img
                      src={errorImg}
                      alt="Error Message"
                      className="w-full rounded-xl xs:w-[90%] sm:w-[70%] md:w-[60%]"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="mb-1 text-xl font-semibold">Testing</h4>
            <p className="max-w-[720px]">
              I'm still in the process of implementing unit and integration
              tests using React Testing Library, Jest and Mock Service Worker
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-xl font-semibold">Future Plans</h4>
            <ul className="flex flex-col space-y-2 mb-8">
              <li className="flex space-x-2 max-w-3xl">
                <div className="mt-1">
                  <BsFillCheckCircleFill color="orange" size="15" />
                </div>
                <span>
                  Implement streaming of the response from the Claude API
                  instead of returning it all at once.
                </span>
              </li>
              <li className="flex space-x-2 max-w-3xl">
                <div className="mt-1">
                  <BsFillCheckCircleFill color="orange" size="15" />
                </div>
                <span>
                  I'm considering saving the response in a database to persist
                  the data upon reload.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-2">
            <ButtonSmall link="https://mfon-ai.vercel.app/" text="Live Link" />
            <ButtonSmallZinc
              link="https://github.com/mfonPeeter/mfon-ai"
              text="GitHub Link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export const MPBlogDetails = ({
  openMPBlogDetails,
  openMPBlogDetailsHandler,
}) => {
  return (
    <>
      <MPBlogDetailsOverlay
        openMPBlogDetails={openMPBlogDetails}
        openMPBlogDetailsHandler={openMPBlogDetailsHandler}
      />
      <aside
        className={`absolute z-10 left-0 w-[90%] bg-white rounded-xl transiton-all duration-500 lg:w-auto ${
          openMPBlogDetails ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={openMPBlogDetailsHandler}
          className="absolute top-2 right-2 bg-orange-400 rounded transition-colors hover:bg-orange-300"
        >
          <BsX size="25" color="white" />
        </button>
        <div className="pb-6 px-2 mt-12 sm:px-4">
          <div className="flex justify-between">
            <h3 className="mb-2">MP. Blog</h3>
            <span className="font-semibold text-lg">2024</span>
          </div>
          <p className="mb-2 text-lg font-semibold">
            Below, you'll discover additional details about my so far process in
            building MP. BLOG.
          </p>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I employed the PyJWT Python library to implement JWT
                authentication.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>I utilized Peewee as the ORM for PostgreSQL.</span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I leveraged psycopg2-binary as the PostgreSQL database adapter.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I securely stored the secret key used for encoding the JWT token
                and other database credentials in a .env file. I utilized the
                python-dotenv Python library to load these environment variables
                into the Python environment.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I incorporated hashing and salting techniques to securely store
                passwords in the database before saving them.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                I utilized the Flask-CORS Python library to enable cross-origin
                resource sharing (CORS), allowing the frontend client to access
                and share resources from the server.
              </span>
            </li>
            <li className="flex space-x-2 max-w-3xl">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilized Tailwind CSS in cloning Stripe's authentication pages
                ensuring full responsiveness.
              </span>
            </li>
          </ul>

          <div className="mb-4">
            <span>
              <span className="font-semibold">For Clarity:</span> The client is
              the Frontend, while the server is the Backend
            </span>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <ButtonSmallZinc
              link="https://github.com/mfonPeeter/blog-client"
              text="GitHub Link (Client)"
            />
            <ButtonSmallZinc
              link="https://github.com/mfonPeeter/blog-server"
              text="GitHub Link (Server)"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
