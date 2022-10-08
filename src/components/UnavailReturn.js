import React from "react";

export const UnavailReturn = (props) => {
  return (
    <div className="flex flex-row items-center justify-between space-x-6">
      <div className="flex justify-start card-action btn">
      <p className="flex items-center justify-center text-2xl p-2 bg-red-500 text-white rounded-md">
        UNAVAILABLE
      </p>
      </div>
      <div className="flex justify-center">
      <p className="flex items-center stat">book: {props.cardbook}</p>
      </div>
      <div
        className="flex p-2 card-action btn justify-end text-green-600 bg-base-100 hover:bg-green-600 hover:text-white"
        onClick={() => {
          props.returnBook(props.cnum);
        }}
      >
  
        <p className="flex text-xl items-center justify-center"> RETURN</p>
      </div>
    </div>
  );
};
