import React from "react";
import avt_1 from "../images/avatar-ali.png";
import avt_2 from "../images/avatar-anisha.png";
import avt_3 from "../images/avatar-richard.png";
import avt_4 from "../images/avatar-shanai.png";

// const avatars = [avt_2, avt_1, avt_3, avt_4];

const avatars = [
  {
    url: avt_2,
    name: "Anisha Li",
    testimonial: `"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."`,
  },
  {
    url: avt_1,
    name: "Ali Bravo",
    testimonial: `  “We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`,
  },
  {
    url: avt_3,
    name: "  Richard Watts",
    testimonial: `“Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    url: avt_4,
    name: "Shanai Gough",
    testimonial: `“Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="inline-flex gap-4 min-h-[30vw] w-screen overflow-hidden">
        <CardsDesktop />
      </div>
    </div>
  );
};

export default Testimonials;

const CardsDesktop = () => {
  return (
    <div className="py-4   bg-white flex gap-4  justify-start overflow-x-scroll  ">
      {avatars.map((i, index) => {
        return (
          <>
            <Card i={i} index = {index} /> 
          </>
        );
      })}
    </div>
  );
};

const Card = ({i, index}) => {
  return (
    <div className="flex p-4 flex-col gap-4 justify-center items-center min-w-[100vw] md:min-w-[35vw]  ">
      <img src={i.url} alt="index" className="w-[4rem]" />
      <h1 className="font-bold text-xl ">{i.name}</h1>
      <p className="text-grayBlue">{i.testimonial}</p>
    </div>
  );
};
