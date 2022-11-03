import React, { useState } from "react";

export const SuggestedBook = (props) => {
  const [clicked, setClicked] = useState(true);
  const [bookname, setBookname] = useState(props.title);
  console.log(props.title);
  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      className="w-[15vw] h-[15vw] relative"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center ">
        {props.title}
      </div>
      <div className={clicked ? "" : "opacity-10"}>
        <div className=" absolute flex justify-center items-center ">
          <img className="w-[15vw] h-[15vw]" src={props.imgref} />
        </div>
      </div>
    </div>
  );
};
