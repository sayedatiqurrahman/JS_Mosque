import React from "react";
import jeysolIcon from "../../../assets/icon/jeysol.svg";
import SectionTitle from "../../Share/SectionTitle/SectionTitle";

const Sponser = () => {
  return (
    <div className=" shadow-md p-10 rounded-md flexContainer justify-between flex-col gap-10 lg:flex-row my-12 ">
      <div className="w-full lg:w-1/2 lg:pr-16 lg:border-r-2">
        <SectionTitle title="Support us" />

        <p className="text-xs lg:text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          excepturi eaque maxime odio nesciunt dolorum molestias dignissimos
          aliquam minus praesentium doloribus blanditiis, iste mollitia velit
          aliquid quam! Voluptatum, recusandae architecto.
        </p>
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-1 lg:w-1/2">
        <img
          className="w-20 lg:w-40 mt-2 mx-auto"
          src={jeysolIcon}
          alt=""
          style={{
            filter:
              "sepia(100%) hue-rotate(60deg) saturate(1000%) brightness(60%)",
          }}
        />{" "}
      </div>
    </div>
  );
};

export default Sponser;
