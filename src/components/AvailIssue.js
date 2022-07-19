import React, { useState } from "react";

export const AvailIssue = (props) => {
  const [bookname, setBookname] = useState("");
  let name;
  return (
    <div className="flex flex-row space-x-4">
      <p className="p-2 bg-green-500 text-white rounded-md">AVAILABLE</p>
      <input
        placeholder="enter book id"
        onChange={(e) => {
          name = e.target.value;
          setBookname(e.target.value);
        }}
      />
      <div onClick={() => props.IssueBook(props.cnum, bookname)}>
        <p> ISSUE</p>
      </div>
    </div>
  );
};
