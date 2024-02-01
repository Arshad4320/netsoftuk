import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Carusol from "../../components/Carusol/Carusol";

const Home = () => {
  return (
    <div>
      <Carusol />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
