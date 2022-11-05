import React from "react";
import { BookItem } from "./BookItem";

export const ListOfBooks = (props) => {
  return (
    <div className="">
      <div className="flex flex-col space-x-2 space-y-2 my-2 py-4 bg-green-400 rounded-md text-white justify-center items-center ">
        {props.booklist.map((book) => {
          // console.log("BOOK IS ", book);
          return <BookItem key={book} book={book} />;
        })}
      </div>
    </div>
  );
};
