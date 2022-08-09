import ImageCapture from "react-image-data-capture";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import frame from "../assets/frame.png";
import logo from "../assets/logo.png";
import azadi from "../assets/azadi.png";
import React from "react";

const Fifth = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
    // read as webP
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    // read as blob
    // imageData.blob
  };

  const captureAgain = () => {
    setImgSrc(null);
  };
  // Use useCallback to avoid unexpected behaviour while rerendering
  const onError = useCallback((error) => {
    console.log(error);
  }, []);

  // Use useMemo to avoid unexpected behaviour while rerendering
  const config = useMemo(() => ({ video: true }), []);
  /*
    {video: true } - Default Camera View
      {video: {facingMode: environment } } - Back Camera
      {video: {facingMode: "user" } } - Front Camera
      */

  // imgFile can be used as a file upload field form submission
  const formData = new FormData();
  formData.append("file", imgFile);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={logo} alt="" style={{ maxHeight: "20vh", width: "90vw" }} />

        <img
          src={azadi}
          alt=""
          style={{
            width: "7rem",
            position: "absolute",
            right: 0,
            top: 100,
            marginBottom: "2rem",
          }}
        />
        <p
          style={{
            textAlign: "center",
            fontWeight: "600",
            marginTop: "2rem",
            padding: "2rem 2rem 0 2rem",
          }}
        >
          Try{" "}
          <span style={{ color: "rgb(0, 76, 143)" }}>
            Azadi ka Amrit Mahotsav
          </span>{" "}
          digital frame & capture yourself in the blend of Tricolor
        </p>
      </div>
      {imgSrc ? (
        <div className="">
          <div
            style={{
              width: "100vw",
              height: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={imgSrc}
                alt="captured-img"
                style={{ position: "absolute", top: 0 }}
              />
              <img
                src={frame}
                alt="captured-img"
                style={{
                  width: 300,
                  height: 300,
                  zIndex: 2,
                  position: "absolute",
                  top: 0,
                }}
              />
            </div>
            <button
              style={{
                position: "absolute",
                top: 330,
                backgroundColor: "#004687",
                color: "white",
                border: "none",
                padding: "0.7rem 1.2rem",
                borderRadius: "5px",
              }}
              onClick={captureAgain}
            >
              Capture again
            </button>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <ImageCapture
            onCapture={onCapture}
            onError={onError}
            width={300}
            userMediaConfig={config}
          />
        </div>
      )}
    </div>
  );
};

export default Fifth;