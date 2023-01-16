import React from "react";

const SemiFooter = () => {
  return (
    <div className="w-full h-60 md:h-48 bg-orange-600 ">
      <div className="max-w-screen-lg m-auto h-full px-6 lg:p-0 flex flex-col md:flex-row justify-evenly md:justify-between items-center">
        <h1 className="text-4xl md:text-3xl font-bold text-white text-center md:text-left md:m-0 md:w-6/12">
          Simplify how your team works today.
        </h1>

        <div className="capitalize px-5 py-2 rounded-full bg-white  font-semibold text-orange-600 w-fit">
          get started
        </div>
      </div>
    </div>
  );
};

export default SemiFooter;
