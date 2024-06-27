import React from "react";
import aboutIcon from "../../../assets/img/about.png";

const About = () => {
  return (
    <div className="py-12 my-8  flexContainer  shadow justify-around  flex-col lg:flex-row">
      <section className="w-full lg:w-1/2">
        <img className="h-64 pb-10 lg:pb-0 mx-auto" src={aboutIcon} alt="" />
      </section>

      <section className="w-full lg:w-1/2 pl-4 pr-24 ">
        <h3 className="text-[13px]">A FEW WORDS ABOUT US</h3>
        <h1 className="text-3xl font-semibold mt-1 mb-4">History Of Center</h1>
        <p className="text-xs">
          Since 1987, Our institution guiding students and people around the
          world. Helping others in every community and region with astonishing
          facilities. Since 1987, Our institution guiding students and people
          around the world.
        </p>

        <h3 className="text-sm font-semibold mt-4">
          The Iwf London is one of the Islamic Center in the Country..
        </h3>

        <button className="btnSecondary mt-5">Read More</button>
      </section>
    </div>
  );
};

export default About;
