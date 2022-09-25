import React from "react";

export const SuggestedBook = (props) => {
  console.log(props.title);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 text-green-600 p-8 rounded-md space-y-2">
      <img src={props.imgref} alt="image" height="60" />
      <div className="max-w-[100px] text-center text-gray-500 ">
        <p>{props.title}</p>
      </div>
    </div>
  );
};
