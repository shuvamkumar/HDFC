import { useState } from "react";
import azadi from "../assets/azadi.png";
import logo from "../assets/logo.png";
import Questions from "./Questions";

const Third = ({ setState, state }) => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return isQuizStarted ? (
    <Questions />
  ) : (
    <div className="third-container">
      <img src={azadi} alt="" className="azadi" />
      <img src={logo} alt="" className="logo" />
      <div className="card">
        <h4>RULES</h4>
        <p>10 Questions, each will have 10 seconds max each.</p>
        <p>Speed, accuracy & a stroke of pride matters</p>
      </div>
      <button onClick={() => setState(4)}>Continue</button>
    </div>
  );
};

export default Third;
