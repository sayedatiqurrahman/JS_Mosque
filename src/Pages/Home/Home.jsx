import React from "react";
import Sponser from "./Sponser/Sponser";
import Donate from "./Donate/Donate";
import About from "./About/About";

const Home = () => {
  return (
    <div className="px-5">
      <About />
      <Donate />
      <Sponser />
    </div>
  );
};

export default Home;
