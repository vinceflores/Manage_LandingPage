import React from "react";
import Button from "./Button";
import fb from "../images/icon-facebook.svg";
import yt from "../images/icon-youtube.svg";
import tweet from "../images/icon-twitter.svg";
import pin from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";
import logo from "../images/logo_light.svg";
const info_links = [
  "Home",
  "Pricing",
  "Products",
  "About Us",
  "  Careers",
  "Community",
  "Privacy Policy",
];

const icons = [fb, yt, tweet, pin, ig];
const Footer = () => {
  return (
    <div className="w-screen">
      <Simplify />
      <Foot />
    </div>
  );
};

export default Footer;

const Foot = () => {
  return (
    <div className="py-8 bg-very_darkBlue h-auto flex flex-col justify-center items-center gap-8">
      
      {/* search box */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder=" Updates in your inbox…"
          className="text-grayBlue rounded-[20px] h-[40px] w-[250px] p-1 "
        />
        <button className="bg-brightRed text-paleRed h-[40px] w-[90px] rounded-[20px]  ">
          {" "}
          Go
        </button>
      </div>
      {/* navs */}
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-2 gap-2 w-[300px] text-paleRed  justify-items-start  p-8">
          {info_links.map((i, key) => {
            return (
              <li key={key} className="text-left ">
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      {/* icons */}
      <div>
        <ul className="flex gap-4 ">
          {icons.map((i, key) => {
            return (
              <li key={key}>
                <img src={i} alt={key} className="w-[40px] h-[40px]" />
              </li>
            );
          })}
        </ul>
      </div>

      {/* logo */}

      <div className="">

      <img
        src={logo}
        alt="logo"
        className="stroke-white stroke-2 fill-white  "
        />
      </div>

      <p className="text-lightGray text-sm font-thin">
        Copyright 2020. All Rights Reserved
      </p>
    </div>
  );
};

const Simplify = () => {
  return (
    <div className="flex flex-col justify-center md:justify-between items-center md:flex-row h-[300px] py-12 px-24 md:px-64 bg-brightRed gap-12">
      <h1 className="text-paleRed text-4xl w-auto md:w-[400px] text-center md:text-left ">
        {" "}
        Simplify how your team works today.
      </h1>
      <Button
        styles="bg-paleRed text-brightRed w-[150px] h-[3rem] border border-black"
        title="Get Started"
      />
    </div>
  );
}
