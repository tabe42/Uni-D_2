import React, { useState } from "react";

export const AvailIssue = (props) => {
  const [bookname, setBookname] = useState("");
  // const validbooklist = props.validbooklist;
  // console.log("INSIDE AVAILISSUE IS " + props.validbooklist);
  let name;
  return (
    <div className="flex flex-row  justify-between items-center space-x-8 ">
      <p className="p-2 bg-green-500 text-white rounded-md">AVAILABLE</p>
      <input
        type="text"
        list="validbookids"
        display="none"
        className="py-1 px-2 rounded-md w-[250px]"
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

      <div
        className="text-green-600 p-2 bg-green-200 hover:bg-green-600 hover:text-white"
        onClick={() => props.IssueBook(props.cnum, bookname)}
      >
        <p> ISSUE</p>
      </div>
    </div>
  );
};
