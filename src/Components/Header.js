import React from "react";
import hero from "../images/illustration-intro.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex md:flex-row  flex-col-reverse  justify-evenly md:px-28 pb-24 ">
      <div className="flex flex-col  justify-center  items-center md:items-start md:gap-2 gap-4 md:w-[30vw] ">
        <h1 className="font-bold  text-4xl md:text-6xl  sm:text-center md:text-left  min-w-[50vw]  ">
          Bring everyone <br />  together to build  <br /> better products.
        </h1>
        <p className=" text-grayBlue text-lg  md:px-0  w-[70%]  sm:w-[400px] md:min-w-[26vw] lg:w-[55%]  text-center  md:text-left  ">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button
          styles="bg-brightRed text-white border border-black w-[120px]  "
          title={`Get Started`}
        />
      </div>
      <img src={hero} alt="hero" className="" />
    </div>
  );
};

export default Header;
