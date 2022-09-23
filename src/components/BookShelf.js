import React, { useEffect, useState } from "react";
import { SuggestedBook } from "./SuggestedBook";
import axios from "axios";

export const BookShelf = () => {
  const [book, setBook] = useState("0");
  const [booklist, setBooklist] = useState([""]);
  const getList = async () => {
    //const url =
    //"http://0aed-2405-201-f002-5026-5dfd-8c8a-f123-70e.ngrok.io/request/?book=9780006280897";
    const url =
      "https://b7cb-2405-201-f002-5026-1899-2568-1b08-5253.ngrok.io/request/?book=9780006280897";
    // await fetch(url)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const hardcoded = {
    bookname: [
      "The Art of Loving",
      "100 Love Sonnets",
      "The Love Artist",
      "Love Visions",
      "The Art of Love, and Other Poems",
    ],
    cover: [
      "http://books.google.com/books/content?id=TRMEDVrkf9EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "http://books.google.com/books/content?id=imyWxbj-n2AC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "http://books.google.com/books/content?id=23Yeb-vrUnsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "http://books.google.com/books/content?id=renlXZJKGy4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      "http://books.google.com/books/content?id=ZNwiygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    ],
  };

  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);
  const namelist = hardcoded.bookname;
  const imglist = hardcoded.cover;

  //const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    //  fetch(url, { mode: "no-cors" })
    //    .then((response) => response.json())
    //    .then((data) => {
    //      setBooklist(data);
    //    })
    //    .catch((err) => {
    //      console.log("ERROR");
    //    });
    setNames(namelist);
    setImages(imglist);
  }, []);
  return (
    <div className="flex flex-col space-y-2 bg-green-500 text-white p-3 rounded-md justify-center items-center m-4">
      <p>RECOMMENDATIONS</p>
      <button
        className="bg-white text-green-500 rounded-md p-2"
        onClick={getList}
      >
        REFRESH
      </button>
      <p> Based on {book}</p>
      <div className="flex flex-row space-x-2   space-x-10">
        {names.map((name, index) => {
          return <SuggestedBook title={name} imgref={images[index]} />;
        })}
      </div>
    </div>
  );
};
