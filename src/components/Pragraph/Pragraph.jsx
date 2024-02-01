import React from "react";

const Pragraph = ({ props, className }) => {
  return (
    <div>
      <p
        className={`text-secondary  md:text-lg font-normal   text-justify ${className}`}
      >
        {props}
      </p>
    </div>
  );
};

export default Pragraph;
