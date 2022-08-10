import ImageCapture from "react-image-data-capture";
import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import frame from "../assets/frame.png";
import logo from "../assets/logo.png";
import azadi from "../assets/azadi.png";
import React from "react";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import * as htmlToImage from "html-to-image";

const Fifth = () => {
  const [flag, setFlag] = useState(false);
  const domEl = useRef(null);

  const downloadImage = async () => {
    const mainTarget = document.getElementById("main_target");
    mainTarget.style.display = "none";
    const dataUrl = await htmlToImage.toPng(domEl.current);
    console.log(dataUrl);
    // download image
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };
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
        <div style={{}}>
          <div
            id="domEl"
            ref={domEl}
            style={{
              width: "100vw",
              height: "50vh",
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
                style={{
                  position: "absolute",
                  top: 0,
                  height: 300,
                  width: 300,
                }}
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
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              id="main_target"
              style={{
                display: "flex",
                position: "absolute",
                top: 330,
              }}
            >
              <button
                style={{
                  backgroundColor: "#004687",
                  color: "white",
                  border: "none",
                  padding: "0.7rem 1.2rem",
                  borderRadius: "24px",
                  marginRight: "1rem",
                  marginBottom: "2rem",
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
                  padding: "0.7rem 2.4rem",
                  borderRadius: "24px",
                  marginBottom: "2rem",
                }}
                onClick={downloadImage}
              >
                Save
              </button>
            </div>
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
