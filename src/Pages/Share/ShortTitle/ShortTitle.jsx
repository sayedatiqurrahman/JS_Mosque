import React from "react";

const ShortTitle = ({ shortTitle, longTitle }) => {
  return (
    <div className="text-center font-semibold">
      <h3 className="uppercase text-sm">{shortTitle}</h3>
      <h1 className="textPrimary text-3xl mt-1">{longTitle}</h1>
    </div>
  );
};

export default ShortTitle;
