import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { CardView } from "./pages/CardView";
import { Attendence } from "./pages/Attendence";
import { Landing } from "./components/Landing";
import scanningGIF from "./components/unidgif.gif"

function App() {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const [scanNameWebCam, setScanNameWebCam] = useState("");
  const [currentFunction, setCurrentFunction] = useState("Lib");
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
          <div className="flex flex-col justify-center items-center">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col-reverse sm:flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left min-w-full p-6">
                  <img src={scanningGIF} className="h-96  "/>
                  <h2 className="text-center font-bold text-lg">Please scan your College ID card</h2>
                  {/* <p className="py-6 text-center">Scan your College - ID card to proceed.</p> */}
                  <div className="flex flex-row place-content-evenly p-2 bg-green-500 rounded-md mt-4 bg-base-200 ">
                    <input
                      placeholder="type 8947 to test"
                      className="border-2 rounded-md p-2 input"
                      
                      onChange={(e) => {
                        setManualinput(e.target.value);
                        console.log(manualinput);
                      }}
                    />
                    <button
                      className="ml-4 p-2 btn rounded-md"
                      onClick={manualentry}
                    >
                      CHECK
                    </button>
                  </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-red-100">
                <QrReader
                    delay={300}
                    style={{ width: "100%" }}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                  />
                </div>
              </div>
            </div>
          </div>
          
      ) : (
            <CardView scanResultWebCam={scanResultWebCam} scanNameWebCam={scanNameWebCam} />
        )}
      </>
  );
}

export default App;
