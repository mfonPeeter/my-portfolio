const ProfessionalExp = () => {
  return (
    <section id="professional" className="pt-10 pb-16">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Professional Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some professional work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mb-10 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>May 2023 - Oct 2023</p>
          <p>United States | Remote</p>
        </div>
        <div>
          <h3>Frontend Developer</h3>
          <p className="text-lg font-semibold italic md:mb-2">GoAppiT</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>May 2023 - Oct 2023</p>
            <p>United States | Remote</p>
          </div>
          <p className="max-w-2xl text-lg mb-2">
            • Redesigned the UI of a client's website and rewrote the code in
            HTML and Tailwind CSS making it fully responsive with a functional
            sidebar menu.
          </p>
          <p className="text-lg mb-2">
            • Utilize ReactJS and Tailwind CSS to rebuild the frontend of the
            company's website.
          </p>
          <p className="text-lg mb-2">
            • Assisting with the UI/UX planning of the company's website
          </p>
          <p className="text-lg">
            <span className="font-semibold">Toolsets: </span>
            Visual Studio Code, Git, HTML, ReactJS, Tailwind CSS
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>Oct 2023 - Jan 2024</p>
          <p>United States | Remote</p>
        </div>
        <div>
          <h3>Software Engineer</h3>
          <p className="text-lg font-semibold italic md:mb-2">GoAppiT</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>Oct 2023 - Jan 2024</p>
            <p>United States | Remote</p>
          </div>
          <p className="max-w-2xl text-lg mb-2">
            • Utilize Flask to connect to Cargowise system for a client
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Utilize Django and JavaScript to redesign and update the database
            of an invoice form for a client by removing old fields, adding new
            fields, or making changes to existing ones.
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Utilize Django to restrict users' access to certain data unless
            part of a certain group in the Django admin panel
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Wrote a Python script to connect to an SFTP server to download
            files to a local directory and delete files in the remote directory
            using Paramiko
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Utilize Pandas to write a Python script which formatted an Excel
            file to the desired format.
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Wrote a Python script to get data from a list of text files in a
            directory to use the data gotten to create a dynamic URL to scrape
            data from a website.
          </p>
          <p className="max-w-2xl text-lg">
            <span className="font-semibold">Toolsets: </span>
            Visual Studio Code, Git, JavaScript, Python, Django, Flask
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExp;
