import { useEffect, useState } from "react";
import questions from "../config/questions";
import azadi from "../assets/azadi.png";
import logo from "../assets/logo.png";
import circle from "../assets/circle.png";

const Questions = ({ setState, state }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [mark, setMark] = useState(0);

  const handleTimer = () => {
    setTimeout(() => {
      if (currentQuestionIndex !== questions.questions.length - 1)
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      else {
        setState(state + 1);
      }
    }, 10000);
  };

  const handleCountDown = () => {
    setTimeout(() => {
      if (count !== 10) setCount(count + 1);
      else setCount(0);
      console.log(count);
    }, 1000);
  };

  useEffect(() => {
    handleTimer();
    if (state === 4) handleCountDown();
  });

  const handleOptionClick = (e) => {
    if (
      e.target.innerText ===
      questions.questions[currentQuestionIndex]["options"][
        questions.questions[currentQuestionIndex]["correctOption"] - 1
      ]
    )
      setMark(mark + 1);
    if (currentQuestionIndex !== questions.questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    else {
      setState(state + 1);
    }
  };

  return (
    <div className="third-container">
      <img src={azadi} alt="" className="azadi" />
      <img src={logo} alt="" className="logo" />
      <div className="card">
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: "#EC1C24",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ zIndex: 1, color: "white" }}>{count}</p>
        </div>
        <p>{questions.questions[currentQuestionIndex]["title"]}</p>
        <button
          className="options"
          onClick={(e) => {
            handleOptionClick(e);
          }}
        >
          {questions.questions[currentQuestionIndex]["options"][0]}
        </button>
        <button
          className="options"
          onClick={(e) => {
            handleOptionClick(e);
          }}
        >
          {questions.questions[currentQuestionIndex]["options"][1]}
        </button>
        <button
          className="options"
          onClick={(e) => {
            handleOptionClick(e);
          }}
        >
          {questions.questions[currentQuestionIndex]["options"][2]}
        </button>
        <button
          className="options"
          onClick={(e) => {
            handleOptionClick(e);
          }}
        >
          {questions.questions[currentQuestionIndex]["options"][3]}
        </button>
      </div>
      <button
        onClick={() => {
          if (currentQuestionIndex !== questions.questions.length - 1)
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          else setState(state + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Questions;
