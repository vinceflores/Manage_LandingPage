import React from "react";
import hero from '../images/bg-tablet-pattern.svg'
const content = [
  {
    id: "01",
    title: " Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: `Advanced built-in reports`,
    text: "  Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];


const About = () => {

  const styles = {
    backgroundImage: "url(" + {hero} + ")"
  }
  return (
    <div className={`${styles} flex flex-col md:flex-row justify-center gap-4  items-start pb-5 bg-about`}>
        <div className="flex-[0.65] ">
      <div className="flex justify-start items-start  flex-col px-8 w-auto md:w-[450px]">
        <h1 className="font-bold text-center md:text-left  text-4xl"> What’s different about Manage?</h1>
        <p className="text-center md:text-left leading-8 text-grayBlue">
          {" "}
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </div>
        </div>

      <ListBlob />
    </div>
  );
};

export default About;

const ListBlob = () => {
  return (
    <div className="flex flex-col w-auto md:w-[459px] ">
      {content.map((i) => {
        return (
          <>
            <div className=" flex justify-start items-center   gap-4  w-[390px] ml-7 pr-6 bg-paleRed  rounded-tl-[20px] rounded-bl-[20px]">
              <div className=" bg-brightRed h-[40px] w-[65px] rounded-[20px] text-white items-center flex justify-center">
                {i.id}
              </div>
              <h1 className=" font-bold text-[16px] text-darkBlue text-left  ">{i.title}</h1>
            </div>
            <p className="text-left md:ml-[80px] text-[16px] px-8 text-grayBlue">
              {i.text}
            </p>
          </>
        );
      })}
    </div>
  );
};
