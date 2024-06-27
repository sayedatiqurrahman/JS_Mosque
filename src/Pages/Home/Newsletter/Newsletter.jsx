import React from "react";
import Makka from "../../../assets/img/makka.jpg";

const Newsletter = () => {
  return (
    <>
      <div
        className="hero h-[250px] overflow-hidden"
        style={{
          backgroundImage: `url(${Makka}) `,
        }}
      >
        <div className="hero-overlay bg-[#38AB1E] bg-opacity-90"></div>
        <div className="hero-content text-center textSecondary">
          <div className="max-w-md">
            <h1 className="font-bold text-4xl">Newsletter</h1>
            <p className="text-[13px]">Subscribe to our mailing list</p>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="text-sm textThardary py-[8.5px] focus:border-none focus:outline-none pl-5 pr-12 rounded-2xl"
              />

              <button className="btnPrimary -ml-12">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
