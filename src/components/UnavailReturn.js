import React from "react";

export const UnavailReturn = (props) => {
  return (
    <div className="flex flex-row  justify-between space-x-6">
      <p className="p-2 bg-red-500 text-white rounded-md self-start">
        UNAVAILABLE
      </p>
      <p>book: {props.cardbook}</p>
      <div
        className="p-2  text-green-600 bg-green-200 hover:bg-green-600 hover:text-white"
        onClick={() => {
          props.returnBook(props.cnum);
        }}
      >
        <p> RETURN</p>
      </div>
    </div>
  );
};
