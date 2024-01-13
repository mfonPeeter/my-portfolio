const VolunteerExp = () => {
  return (
    <section className="pt-10 pb-16">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Volunteer Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some voluntary work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>March 2023 - April 2023</p>
          <p>Uyo, Nigeria | Remote</p>
        </div>
        <div>
          <h3>Frontend Developer</h3>
          <p className="text-lg font-semibold italic md:mb-2">George's Work</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>March 2023 - April 2023</p>
            <p>Uyo, Nigeria | Remote</p>
          </div>
          <p className="max-w-2xl text-lg">
            • I helped build the landing page and the different authentication
            pages such as Login, Sign up, Forgot Password, etc.
          </p>
          <p className="text-lg mb-2">
            • I made sure that the pages built were fully responsive.
          </p>
          <p className="text-lg">
            <span className="font-semibold">Tools Used: </span>
            React, Tailwind CSS, Git, GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerExp;
