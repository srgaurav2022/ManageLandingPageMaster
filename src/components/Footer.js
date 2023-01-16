import React from "react";
import logo from "../images/logo_white.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="w-full h-full md:h-48 bg-gray-900  text-white">
      <div className="max-w-screen-lg m-auto h-full flex flex-col md:flex-row items-center justify-between p-10  space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:space-y-10  justify-between order-3 md:order-1 px-1 ">
          <div className="logo order-2 py-1 md:py-0 md:order-1">
            <img src={logo} alt="" />
          </div>
          <div className="social flex space-x-5 py-10 md:py-0  md:space-x-2 order-1 md:order-2 scale-150 md:scale-100">
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={youtube} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={pinterest} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
        <div className="order-2 md:order-2 flex  space-x-6 md:space-x-10 lg:space-x-20  ">
          <div className="space-y-1">
            <div>Home</div>
            <div>Pricing</div>
            <div>Products</div>
            <div>About Us</div>
          </div>
          <div className="space-y-1">
            <div>Careers</div>
            <div>Community</div>
            <div>Privacy Policy</div>
          </div>
        </div>
        <div className="flex flex-col md:space-y-10 order-1 md:order-3">
          <div className="flex justify-center items-center space-x-2">
            <div>
              <input
                className="w-48 md:w-56 h-12 pl-3 md:pl-5 text rounded-full "
                type="text"
                placeholder="Updates in your inbox…"
              />
            </div>
            <div>
              <div className="capitalize px-6 py-3 rounded-full bg-orange-600  font-semibold text-white w-fit">
                Go
              </div>
            </div>
          </div>
          <div>
            <div className=" hidden md:block ">
              Copyright 2020. All Rights Reserved
            </div>
          </div>
        </div>
        <div className="md:hidden text-center order-4">
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
