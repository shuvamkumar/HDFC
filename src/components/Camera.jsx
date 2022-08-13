import React from "react";
import logo from "../assets/logo.png";
import azadi from "../assets/azadi.png";
import frame from "../assets/frame.png";
import { useEffect, useRef, useState } from "react";

const Camera = () => {
  return (
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
  );
};

export default Camera;
