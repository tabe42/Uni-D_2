import React, { useState, useEffect } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { AddWidget } from "../components/AddWidget";
import { db } from "../firebase-config";
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { RepeatRounded } from "@material-ui/icons";
import { Loader } from "./Loader";
import { Loader2 } from "./Loader2";

export const CardView = (props) => {
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(false);
  const [imgList, setImgList] = useState([]);
  const userRef = collection(db, "users");
  console.log(props.scanResultWebCam);

  const updateItem = async (docid) => {
    setLoading(true);
    const docRef = doc(db, "users", docid);
    await updateDoc(docRef, { card3: "unAVail" });
    setLoading(false);
  };

  const addItem = async () => {
    await addDoc(userRef, {
      admno: props.scanResultWebCam,
      card1: "available",
      card2: "available",
      card3: "available",
      name: "test",
    });
    console.log("reading");
    const data = await getDocs(userRef);
    console.log("datalogged is", data);
    // console.log("image data", data);
    setImgList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const q = query(userRef, where());
  useEffect(() => {
    // const q = query(collection(db, "users"), where("admno", "==", "8947"));
    // const querySnapshot = getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    // if (!query.empty) {
    //   const snapshot = query.docs[0];
    //   const data = snapshot.data();
    //   console.log(data);
    // } else {
    //   console.log("not found");
    // }
    // const userRef2 = doc(db, "users", "dAb0YnLzD8fgdyBeRr3Z");
    // getDoc(userRef2).then((doc) => {
    //   console.log(doc.data(), doc.id);
    // });

    const getUserList = async () => {
      setLoading(true);
      let found2 = false;
      console.log("reading");
      const userRef2 = collection(db, "users");

      const data2 = await getDocs(userRef2);
      setLoading(false);
      console.log("datalogged is", data2);
      console.log("image data", data2);
      const myNewList = data2.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(myNewList);
      myNewList.map((item) => {
        if (item.admno == props.scanResultWebCam) {
          console.log(
            props.scanResultWebCam,
            "and",
            item.admno,
            "found st to true"
          );
          found2 = true;
        }

        // }

        // )
        //   if(found==false){
        //     console.log('calling adddoc inside useeffect')
        // await addDoc(userRef, {admno:props.scanResultWebCam,card1:"available",card2:"available",card3:"available",name:"test"});

        //   }
        // console.log(imgList);
      });
      if (found2 == false) {
        console.log("calling adddoc inside useeffect");
        await addDoc(userRef, {
          admno: props.scanResultWebCam,
          name: props.scanNameWebCam,
          // card1: { bookname: "=" },
          card1status: true,
          card1book: "-",
          card2status: true,
          card2book: "-",
          card3status: true,
          card3book: "-",
        });
        alert("New Account Created, Please reload!");
        window.location.reload(false);

        console.log("console log inside found==false statement", imgList);
      }

      setImgList(myNewList);
    };

    // fetchedRollno(props.scanResultWebCam);
    // setCurrNo(props.scanResultWebCam)

    getUserList();
  }, []);

  // const userRef = collection(db, "users");
  // useEffect(() => {
  //   const getCard = async () => {
  //     const data = await getDocs(userRef);
  //     console.log("hi", data);
  //     setProductList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getProducts();
  // }, []);

  return loading === false ? (
    <div className="flex flex-col items-center h-screen">
      <p className="text-green-500 text-[64px] my-4">UNI-ID</p>
      <div className="m-auto text-2xl">
        <div className="bg-green-500 p-3 text-white rounded-md shadow-md">
          {/* <p>STUDENT: DEB</p>
          <p>ADMISSION NUMBER:8947</p> */}
          <div className="bg-white p-3 text-green-500 mt-2 rounded-md space-y-4">
            {/* <AddWidget cardnumber={"1"} cardstatus={card1} />
            <AddWidget cardnumber="2" cardstatus={card2} />
            <AddWidget cardnumber="3" cardstatus={card3} /> */}

            {imgList.map((item) => {
              console.log("ITEM LOGGED IS ", item);
              console.log(props.scanResultWebCam);

              // console.log("inside function");
              //REPLACE 8947 WITH THE INT VALUE OBTAINED FROM QR CODE.
              if (item.admno == props.scanResultWebCam) {
                console.log("ITEM ID IS ", item.id);
                return (
                  <AddWidget
                    key={item.id}
                    docid={item.id}
                    name={item.name}
                    admno={item.admno}
                    card1status={item.card1status}
                    card2status={item.card2status}
                    card3status={item.card3status}
                    card1book={item.card1book}
                    card2book={item.card2book}
                    card3book={item.card3book}
                  />
                );
              }
            })}
          </div>
          <div className="bg-green-400 rounded-md mt-4 p-2 text-center">
            ISSUAL HISTORY
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center h-screen">
      <p className="text-green-500 text-[64px] my-4">UNI-ID</p>
      <div className="m-auto text-2xl">
        <div className="bg-green-500 p-3 text-white rounded-md shadow-md">
          <Loader2 />
        </div>
      </div>
    </div>
  );
};
