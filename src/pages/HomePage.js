import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection';
import About from '../components/HomePage/About';
import VolunteerExp from '../components/HomePage/VolunteerExp';
import Projects from '../components/HomePage/Projects';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <VolunteerExp />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
