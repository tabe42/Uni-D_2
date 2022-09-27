import React from "react";

export const UnavailReturn = (props) => {
  return (
    <div className="flex flex-row items-center justify-between space-x-6">
      <p className="flex items-center justify-center p-2 bg-red-500 text-white rounded-md ml-4">
        UNAVAILABLE
      </p>
      <p className="flex items-center stat">book: {props.cardbook}</p>
      <div
        className="p-2  text-green-600 bg-base-100 hover:bg-green-600 hover:text-white"
        onClick={() => {
          props.returnBook(props.cnum);
        }}
      >
        <p className="flex items-center justify-center"> RETURN</p>
      </div>
    </div>
  );
};
