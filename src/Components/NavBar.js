import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";
import "../App.css";
import Button from "./Button";
const NavBar = ({setVisible}) => {
  const [ham, setham] = useState(true);
    const [Ex, setEx] = useState(false);
  const hamClicked = () => {
    if(ham){
        setham(false)
        setEx(true)
        setVisible('hidden')
    }else{
        setham(true)
        setEx(false)
        setVisible('')
    }
  }

  const exClicked = () => {
    if(Ex){
        setEx(false)
        setham(true)
        setVisible('')
    }else{
        setEx(true)
        setham(false)
        setVisible('hidden')
    }

  }


 
  
  return (
    <>
      <div className=" md:inline-flex nav  p-28 gap-4 justify-between items-center  w-full">
        <img src={logo} alt="img " />
        <ul className="gap-4 flex font-vietnam ">
          <li>Pricing</li>
          <li>Product</li>
          <li> About Us </li>
          <li>Careers </li>
          <li>Community</li>
        </ul>
        <Button styles="bg-brightRed text-white  border border-black" title="Get Started" /> 
      </div>
      <div className={`${Ex ? 'hide' : ''} md:inline-flex nav-mobile p-8 gap-4 justify-between items-center w-full`}>
        <img src={logo} alt="img " />
        <button className="bg-brightRed nav text-white h-[2.5rem]  p-0  px-3 py-2 border border-black rounded-[20px] ">
          Get Started
        </button>
        <FontAwesomeIcon icon={faBars} size="xl" onClick={hamClicked} />
      </div>


      <div className={`grid outline nav-mobile  ${ham? 'hide': ''} bg-white   h-screen`}>
        <FontAwesomeIcon icon={faX} size="xl" onClick={exClicked}  className={` relative top-[2rem] left-[87%] `} />

        <ul className="  self-center justify-self-center   gap-8 flex flex-col justify-center items-center w-full ">
          <li>Pricing</li>
          <li>Product</li>
          <li> About Us </li>
          <li>Careers </li>
          <li>Community</li>
        </ul>


      </div>
    </>
  );
};

export default NavBar;
