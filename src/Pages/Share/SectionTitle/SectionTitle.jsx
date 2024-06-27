import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold mt-2">{title}</h1>
      <p className="w-32 h-1 rounded-md  bg-gradient-to-r from-[#38AB1E] to-[#38AB1E]/20"></p>
    </>
  );
};

export default SectionTitle;
