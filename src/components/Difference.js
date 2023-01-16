import React from "react";

const Difference = () => {
  return (
    <div className="w-full h-full my-10 ">
      <div className="max-w-screen-lg m-auto h-full grid grid-cols-1 md:grid-cols-2 justify-center items-start">
        <div className="left space-y-6 mb-16 ">
          <h1 className="text-3xl md:text-4xl mx-10 md:mx-6 lg:m-0 text-center md:text-left font-bold">
            What’s different about Manage?
          </h1>
          <p className="text-gray-400 text-center mx-6 lg:m-0 md:10/12 lg:w-7/12 md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row items-start">
            <div className="hidden md:flex h-6 px-4  w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4">
              01
            </div>
            <div className="md:hidden flex justify-center items-center pl-6 md:p-0 h-8">
              <div className="px-4 w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4">
                01
              </div>
              <h4 className="font-bold pr-2 py-1 bg-orange-100">
                Track company-wide progress
              </h4>
            </div>
            <div>
              <h4 className="hidden md:flex font-bold mb-5">
                Track company-wide progress
              </h4>
              <p className="text-gray-400 pl-6 md:p-0 mt-5 md:mt-0 mb-10 w-11/12">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className="hidden md:flex h-6 px-4  w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4">
              02
            </div>
            <div className="md:hidden flex -center items-center h-8 pl-6 md:p-0">
              <div className="px-4 w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4">
                02
              </div>
              <h4 className="font-bold pr-2 py-1 bg-orange-100 justify">
                Advanced built-in reports
              </h4>
            </div>
            <div className="">
              <h4 className="hidden md:flex font-bold mb-5">
                Advanced built-in reports
              </h4>
              <p className="text-gray-400 pl-6 md:p-0 mt-5 md:mt-0 mb-10 w-11/12">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            <div className="hidden md:flex h-6 px-4  w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4">
              03
            </div>
            <div className="md:hidden flex justify-center items-center h-8 pl-6 md:p-0 ">
              <div className="px-4 w-fit rounded-full text-center bg-orange-600 text-white font-semibold mr-4 ">
                03
              </div>
              <h4 className="font-bold pr-2 py-1 bg-orange-100">
                Everything you need in one place
              </h4>
            </div>
            <div>
              <h4 className="hidden md:flex font-bold mb-5">
                Everything you need in one place
              </h4>
              <p className="text-gray-400 pl-6 md:p-0 mt-5 md:mt-0 mb-10 w-11/12">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
