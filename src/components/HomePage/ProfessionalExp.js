import { BsFillCheckCircleFill } from 'react-icons/bs';

const ProfessionalExp = () => {
  return (
    <section id="professional" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Professional Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some professional work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">GOAPPiT</span>
              <span className="font-normal">Oct 2023 - Jan 2024</span>
            </div>
            <span className="text-lg">Software Engineer</span>
            <span>Fort Worth, Texas, United States</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilized Flask to establish seamless connectivity with the
                Cargowise system on behalf of a client.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Utilized Django and JavaScript to revamp and modernize the
                database structure of an invoice form for a client,
                incorporating removal of outdated fields, addition of new
                fields, and modification of existing ones.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Developed a Python script utilizing Paramiko to establish SFTP
                connectivity, enabling the secure retrieval of files from a
                remote server to a local directory, along with the capability to
                delete files remotely.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Leveraged Pandas to create a Python script for formatting an
                Excel file into the desired layout.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Crafted a Python script to extract data from a directory of text
                files, dynamically generating URLs for scraping data from
                corresponding websites.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Engaged in the collaborative process of peer reviews by
                submitting concise and focused pull requests, aimed at improving
                code quality, upholding best practices, and fostering shared
                learning among team members.
              </span>
            </li>
          </ul>
          <div className="grow shrink" />
          <div className="grid grid-cols-2 gap-1 text-[14.5px] font-semibold xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:flex">
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              JavaScript
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Python
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Flask
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Django
            </span>
            <span className="flex items-center justify-center px-3 py-0.5 text-orange-500 bg-orange-100 rounded-full">
              Bootstrap
            </span>
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">GOAPPiT</span>
              <span className="font-normal">May 2023 - Oct 2023</span>
            </div>
            <span className="text-lg">Frontend Engineer</span>
            <span>Fort Worth, Texas, United States</span>
          </div>
          <ul className="flex flex-col space-y-2 mb-4">
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Successfully redesigned the UI of a client's website,
                implementing HTML and Tailwind to rewrite the code for full
                responsiveness, and integrating a functional sidebar menu.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Demonstrated proficiency in employing React and Tailwind to
                completely overhaul the frontend of the company's website.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Contributed valuable insights and support in the strategic
                planning of UI/UX enhancements for the company's website.
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

        <div className="flex flex-col p-4 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg xs:p-6 xs:rounded-3xl">
          <div className="flex flex-col mb-4 font-semibold">
            <div className="flex flex-col justify-between xs:flex-row">
              <span className="text-xl">Dealdrive</span>
              <span className="font-normal">April 2023 - May 2023</span>
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
                Utilized ReactJS to architect dynamic and responsive frontend
                experiences tailored to meet clients' unique requirements,
                ensuring optimal performance and user engagement.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Engaged directly with the design team to analyze and optimize
                user interface (UI) elements, ensuring seamless integration of
                design aesthetics and functionality for clients' websites.
              </span>
            </li>
            <li className="flex space-x-2">
              <div className="mt-1">
                <BsFillCheckCircleFill color="orange" size="15" />
              </div>
              <span>
                Implemented a WhatsApp widget into clients' websites, empowering
                potential customers to initiate swift communication with the
                client, and fostering faster and more direct engagement
                opportunities.
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

export default ProfessionalExp;
