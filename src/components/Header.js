import React, { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../images/illustration-intro.svg";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
// import bgDesk from "../images/bg-simplify-section-desktop.svg";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Pricing",
    },
    {
      id: 2,
      link: "Product",
    },
    {
      id: 3,
      link: "About Us",
    },
    {
      id: 4,
      link: "Careers",
    },
    {
      id: 5,
      link: "Community",
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="max-w-screen-lg m-auto h-full ">
        <nav className="flex justify-between items-center  h-28  px-5 lg:p-0">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden md:flex space-x-5 font-semibold text-xs">
            {links.map(({ id, link }) => (
              <li key={id} className="capitalize">
                <Link to={link} duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <div className="capitalize px-5 py-2 rounded-full bg-orange-600  font-semibold text-white shadow-lg shadow-orange-300">
              get started
            </div>
          </div>

          {/* for Mobile */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer pr-4 z-20 text-gray-400 hover:scale-110 duration-300"
          >
            {nav ? (
              <img src={close} alt="ham" />
            ) : (
              <img src={hamburger} alt="ham" />
            )}
          </div>
          {nav && (
            <ul className="md:hidden h-fit flex flex-col justify-between items-center fixed top-16 w-[90vw] m-auto text-center space-y-5 font-bold bg-gray-100 text-gray-900 shadow-lg rounded-md my-10 p-10">
              {links.map(({ id, link }) => (
                <li key={id} className="capitalize">
                  <Link to={link} duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div
          id="hero"
          className="my-10 md:mx-6 lg:mx-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center "
        >
          <div className="left space-y-3 md:space-y-6 order-2 md:order-1 items-center md:text-left flex flex-col justify-center md:block mx-3 text-center mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold ">
              Bring everyone together to build better products.
            </h1>
            <p className="text-gray-400 mx-6 md:m-0 md:11/12 lg:w-8/12">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="capitalize w-fit px-6 py-2 text-xs rounded-full bg-orange-600 font-semibold text-white shadow-lg shadow-orange-300">
              get started
            </div>
          </div>
          <div className="right order-1 md:order-2 ">
            <img className="w-full m-auto" src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
