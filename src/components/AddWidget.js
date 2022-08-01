import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { Loader } from "../pages/Loader";
import { AvailIssue } from "./AvailIssue";
import { ListOfBooks } from "./ListOfBooks";
import { UnavailReturn } from "./UnavailReturn";

export const AddWidget = ({
  docid,
  name,
  admno,
  card1status,
  card2status,
  card3status,
  card1book,
  card2book,
  card3book,
  booklist,
}) => {
  const [loading, setLoading] = useState(false);
  let visible2 = false;
  const [visible, setVisible] = useState(false);
  const [listview, setListview] = useState(false);
  console.log(booklist);
  const IssueBook = async (cnum, bname) => {
    setLoading(true);
    let cardbook = `card${cnum}book`;
    let cardstatus = `card${cnum}status`;
    let booklist = `booklist`;

    const docRef = doc(db, "users", docid);

    await updateDoc(docRef, {
      [cardbook]: bname,
      [cardstatus]: false,
      // "card1.bookname": "Coraline",
    });

    try {
      await updateDoc(docRef, {
        booklist: arrayUnion(bname),
      });
    } catch (e) {
      console.error("error adding");
    }

    window.location.reload(false); //might have to change this way of reloading
    setLoading(false);
  };

  const returnBook = async (cnum) => {
    setLoading(true);
    let cardbook = `card${cnum}book`;
    let cardstatus = `card${cnum}status`;
    const docRef = doc(db, "users", docid);
    await updateDoc(docRef, {
      [cardbook]: "-",
      [cardstatus]: true,
    });
    window.location.reload(false); //might have to change this way of reloading
    setLoading(true);
  };

  return (
    <>
      {loading === false ? (
        <>
          {console.log(docid)}
          <p className="font-xl text-center">LIBRARY LOGS</p>
          <p>Name: {name}</p>
          <p>Admission Number: {admno}</p>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-start items-center space-x-4 bg-green-100 rounded-md p-2">
              <p>CARD 1</p>
              {/* <p className="bg-green-500 p-4 rounded-md shadow-md text-white">
          {card1.bookname}
        </p> */}

              {card1status === true ? (
                <AvailIssue IssueBook={IssueBook} cnum="1" />
              ) : (
                <UnavailReturn
                  returnBook={returnBook}
                  cnum="1"
                  cardbook={card1book}
                />
              )}
            </div>
            <div className="flex flex-row justify-start items-center space-x-4 bg-green-100 rounded-md p-2">
              <p>CARD 2</p>
              {card2status === true ? (
                <AvailIssue IssueBook={IssueBook} cnum="2" />
              ) : (
                <UnavailReturn
                  returnBook={returnBook}
                  cnum="2"
                  cardbook={card2book}
                />
              )}
            </div>
            <div
              // onClick={() => updateItem(docid)}
              className="flex flex-row  items-center space-x-4 bg-green-100 rounded-md p-2 "
            >
              <p>CARD 3</p>
              {card3status === true ? (
                <AvailIssue IssueBook={IssueBook} cnum="3" />
              ) : (
                <UnavailReturn
                  returnBook={returnBook}
                  cnum="3"
                  cardbook={card3book}
                />
              )}
            </div>
            <button
              className="bg-green-400 rounded-md mt-4 p-2 text-center text-white hover:bg-green-300"
              onClick={() => {
                if (visible === false) setVisible(true);
                else setVisible(false);
              }}
            >
              ISSUAL HISTORY
            </button>
          </div>

          {visible && <ListOfBooks booklist={booklist} />}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
