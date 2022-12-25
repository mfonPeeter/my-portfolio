import { Fragment } from "react";

import HeroSection from "../components/HomePage/HeroSection";
import About from "../components/HomePage/About";
import Projects from "../components/HomePage/Projects";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <Projects />
    </Fragment>
  );
};

export default HomePage;
