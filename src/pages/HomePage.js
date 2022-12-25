import { Fragment } from "react";

import HeroSection from "../components/HomePage/HeroSection";
import About from "../components/HomePage/About";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <About />
    </Fragment>
  );
};

export default HomePage;
