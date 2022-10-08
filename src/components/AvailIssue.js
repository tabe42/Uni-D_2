import React, { useState } from "react";

export const AvailIssue = (props) => {
  const [bookname, setBookname] = useState("");
  // const validbooklist = props.validbooklist;
  // console.log("INSIDE AVAILISSUE IS " + props.validbooklist);
  let name;
  return (
    <section className="flex flex-row items-center justify-between space-x-20 p-2">
      <div className="flex card-action items-center justify-center bg-green-500 btn">
      <p className="flex items-center justify-center  text-2xl p-2  bg-green-500 text-white rounded-md">
        AVAILABLE
      </p>
      </div>
      <div className="flex">
      <input
        type="text"
        list="validbookids"
        display="none"
        className="flex py-1 px-2 rounded-md w-[250px] input stat placeholder:text-2xl"
        placeholder="enter book id"
        onChange={(e) => {
          name = e.target.value;
          setBookname(e.target.value);
        }}
      />
      <datalist id="validbookids">
        {props.validbooklist.map((book, key) => (
          <option key={key} value={book.id} />
        ))}
      </datalist>
      </div>

      <button
        className="flex card-actions btn text-green-600 items-center text-3xl justify-center p-2 bg-base-100 hover:bg-green-600 hover:text-white"
        onClick={() => props.IssueBook(props.cnum, bookname)}
      >
       <p className="text-xl">ISSUE</p>
      </button>
    </section>
  );
};
