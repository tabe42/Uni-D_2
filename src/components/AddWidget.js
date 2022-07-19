import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { AvailIssue } from "./AvailIssue";
import { UnavailReturn } from "./UnavailReturn";

export const AddWidget = ({ docid, name, admno, card1, card2, card3 }) => {
  const IssueBook = async (cnum, bname) => {
    const docRef = doc(db, "users", docid, "LibCard", cnum);
    await updateDoc(docRef, {
      bookname: bname,
    });
  };

  return (
    <>
      {console.log(docid)}
      <p>{name}</p>
      <p>{admno}</p>
      <div className="flex flex-row justify-between items-center space-x-4">
        <p>CARD 1</p>
        {/* <p className="bg-green-500 p-4 rounded-md shadow-md text-white">
          {card1.bookname}
        </p> */}

        {card1.status === true ? (
          <AvailIssue IssueBook={IssueBook} cnum="card1" />
        ) : (
          <UnavailReturn />
        )}
      </div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <p>CARD 2</p>
        {card2.status === true ? (
          <AvailIssue IssueBook={IssueBook} cnum="card2" />
        ) : (
          <UnavailReturn />
        )}
      </div>
      <div
        // onClick={() => updateItem(docid)}
        className="flex flex-row justify-between items-center space-x-4"
      >
        <p>CARD 3</p>
        {card2.status === true ? (
          <AvailIssue IssueBook={IssueBook} cnum="card3" />
        ) : (
          <UnavailReturn />
        )}
      </div>
    </>
  );
};
