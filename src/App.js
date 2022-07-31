import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { CardView } from "./pages/CardView";
import { Attendence } from "./pages/Attendence";
import { Landing } from "./components/Landing";

function App() {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [scanNameWebCam, setScanNameWebCam] = useState("");
  const [currentFunction, setCurrentFunction] = useState("1");
  const [manualinput, setManualinput] = useState("");

  const handleClickLibrary = (error) => {
    setCurrentFunction("Lib");
  };
  const handleClickCafeteria = (error) => {
    setCurrentFunction("Caf");
  };
  const handleClickAttendence = (error) => {
    setCurrentFunction("Att");
  };

  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result.substr(58, 4));
      const myArr = result.split(",");
      setScanNameWebCam(myArr[2].substr(7));
      console.log(result);
    }
  };
  const manualentry = (result) => {
    if (result) {
      setScanResultWebCam(manualinput);
      console.log(result);
    }
  };
  return (
    <>
      {scanResultWebCam == "" ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <QrReader
              delay={300}
              style={{ width: "50%" }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />

            <div className="p-2 bg-green-500 rounded-md mt-4">
              <input
                placeholder="backup entry"
                className="border-2 rounded-md p-2"
                onChange={(e) => {
                  setManualinput(e.target.value);
                  console.log(manualinput);
                }}
              />
              <button
                className="ml-4 p-2 bg-green-200 text-green-600 rounded-md"
                onClick={manualentry}
              >
                CHECK
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {currentFunction == "1" ? (
            <div>
              <div className="flex flex-col items-center h-screen">
                <p className="text-green-500 text-[64px] my-4 mt-10 font-semibold">
                  WELCOME : {scanResultWebCam}
                </p>
                <div className="m-auto text-2xl">
                  <div className="bg-green-500 p-8 text-white rounded-md shadow-md">
                    <div className="flex flex-row bg-green-500 items-center justify-center space-x-8">
                      <button
                        className="flex p-10 px-16 bg-green-400 rounded-md shadow-md"
                        onClick={handleClickLibrary}
                      >
                        Library
                      </button>
                      <button
                        className="flex p-10 px-16 bg-green-400 rounded-md shadow-md"
                        onClick={handleClickAttendence}
                      >
                        Attendence
                      </button>
                      <button
                        className="flex p-10 px-16 bg-green-400 rounded-md shadow-md"
                        onClick={handleClickCafeteria}
                      >
                        Cafeteria
                      </button>
                    </div>
                    <div className="bg-green-400 rounded-md mt-8 p-8 text-center">
                      CHOOSE FUNCTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {currentFunction == "Lib" ? (
                <CardView scanResultWebCam={scanResultWebCam} scanNameWebCam={scanNameWebCam} />
              ) : (
                <Attendence />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
