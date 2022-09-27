import React, { useEffect, useState } from "react";
import { SuggestedBook } from "./SuggestedBook";
import axios from "axios";

export const BookShelf = (props) => {
  const [book, setBook] = useState("-");
  const [booklist, setBooklist] = useState([]);
  const [index, setIndex] = useState(0);
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);

  const getList = async () => {
    //const url =
    //"http://0aed-2405-201-f002-5026-5dfd-8c8a-f123-70e.ngrok.io/request/?book=9780006280897";
    // const firstrand=Math.flood(Math.random()*2);
    const indexofbook = Math.floor(Math.random() * props.booklist.length);
    console.log(
      indexofbook,
      "<--INDEX",
      props.booklist.length,
      "<--booklistlength"
    );

    const bookid = props.booklist[indexofbook];
    // const bookname = props.validbooklist.filter((book) => bookid === book.id);
    console.log("VALIDBOOKLIST INSIDE SHELF", props.validbooklist);
    let i = 0;
    let bookname = "";
    for (i = 0; i < props.validbooklist.length; i++) {
      if (props.validbooklist[i].id == bookid) {
        bookname = props.validbooklist[i].name;
      }
    }
    setBook(bookname);
    const url = "https://b9d5-223-227-113-28.in.ngrok.io/"+ "request/?book=" + bookid;
    fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooklist(data);
        setNames(data.bookname);
        setImages(data.cover);
      })
      .catch((err) => console.log(err));
    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error));
  };
  // const hardcoded = {
  //   bookname: [
  //     "The Art of Loving",
  //     "100 Love Sonnets",
  //     "The Love Artist",
  //     "Love Visions",
  //     "The Art of Love, and Other Poems",
  //   ],
  //   cover: [
  //     "http://books.google.com/books/content?id=TRMEDVrkf9EC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  //     "http://books.google.com/books/content?id=imyWxbj-n2AC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  //     "http://books.google.com/books/content?id=23Yeb-vrUnsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  //     "http://books.google.com/books/content?id=renlXZJKGy4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  //     "http://books.google.com/books/content?id=ZNwiygEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  //   ],
  // };

  // const namelist = hardcoded.bookname;
  // const imglist = hardcoded.cover;

  //const url = "https://jsonplaceholder.typicode.com/posts";
  // useEffect(() => {
  //   //  fetch(url, { mode: "no-cors" })
  //   //    .then((response) => response.json())
  //   //    .then((data) => {
  //   //      setBooklist(data);
  //   //    })
  //   //    .catch((err) => {
  //   //      console.log("ERROR");
  //   //    });
  //   setNames(namelist);
  //   setImages(imglist);
  // }, []);
  // useEffect(()=>{
  //   setIndex(0);

  // },[])
  return (
    <div className="flex flex-col space-y-2 bg-gray-100 text-gray-500 p-3 rounded-md justify-center items-center m-4">
      <p>RECOMMENDATIONS</p>
      <button
        className="bg-gray-200 text-gray-500 rounded-md p-2"
        onClick={getList}
      >
        REFRESH
      </button>
      <p> Based on {book}</p>
      <div className="flex flex-row space-x-2   space-x-10">
        {names.map((name, index) => {
          return (
            <SuggestedBook key={name} title={name} imgref={images[index]} />
          );
        })}
      </div>
    </div>
  );
};
