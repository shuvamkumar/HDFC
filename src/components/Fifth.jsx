import ImageCapture from "react-image-data-capture";
import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import frame from "../assets/frame.png";
import logo from "../assets/logo.png";
import azadi from "../assets/azadi.png";
import React from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const Fifth = () => {
  const [flag, setFlag] = useState(false);
  const domEl = useRef(null);

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
        <img
          src={logo}
          alt=""
          style={{ maxHeight: "20vh", width: "90vw", marginTop: "4rem" }}
        />

        <img
          src={azadi}
          alt=""
          style={{
            width: "7rem",
            position: "absolute",
            right: 0,
            top: 0,
            marginBottom: "2rem",
          }}
        />
        <p
          style={{
            textAlign: "center",
            fontWeight: "600",
            padding: "0rem 2rem 1rem 2rem",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "40vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
            ref={domEl}
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
                style={{
                  position: "absolute",
                  top: 0,
                  height: 330,
                  width: 330,
                }}
              />
              <img
                src={frame}
                alt="captured-img"
                style={{
                  width: 330,
                  height: 330,
                  zIndex: 2,
                  position: "absolute",
                  top: 0,
                }}
              />
            </div>
            {/* <div
              style={{
                display: "flex",
                position: "absolute",
                top: 330,
              }}
            ></div> */}
          </div>
          <button
            style={{
              backgroundColor: "#004687",
              color: "white",
              border: "none",
              padding: "0.7rem 1.2rem",
              borderRadius: "24px",
              marginBottom: "1rem",
            }}
            onClick={captureAgain}
          >
            Capture again
          </button>
          <button
            style={{
              backgroundColor: "#004687",
              color: "white",
              border: "none",
              padding: "0.7rem 3rem",
              borderRadius: "24px",
              marginBottom: "2rem",
            }}
            onClick={() => exportComponentAsPNG(domEl)}
          >
            Save
          </button>
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
