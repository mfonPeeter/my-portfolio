import { Fragment } from "react";

import HeroSection from "../components/HomePage/HeroSection";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";
import Footer from "../components/HomePage/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <Projects />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
