import { useEffect, useState } from "react";
import questions from "../config/questions";
import azadi from "../assets/azadi.png";
import logo from "../assets/logo.png";

const Questions = ({ setState, state }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, [currentQuestionIndex]);

  const handleOptionClick = (e) => {
    setIsClicked(true);
    if (currentQuestionIndex === questions.questions.length - 1) {
      setState(5);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    }
  };

  return (
    <div className="third-container">
      <img src={azadi} alt="" className="azadi" />
      <img src={logo} alt="" className="logo" />
      <div className="card">
        {questions.questions.length > currentQuestionIndex && (
          <>
            <p
              style={{
                textAlign: "center",
                fontWeight: "1.5rem",
                fontSize: "1.2rem",
              }}
            >
              {questions.questions[currentQuestionIndex]["title"]}
            </p>
            {questions.questions[currentQuestionIndex]["img"] !== "" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={questions.questions[currentQuestionIndex]["img"]}
                  alt=""
                  style={{
                    width: "10rem",
                    height: "10rem",
                    marginBottom: "1rem",
                  }}
                />
              </div>
            )}
          </>
        )}
        <div className="optionCard">
          {questions.questions.length > currentQuestionIndex &&
            questions.questions[currentQuestionIndex]["options"].map((q) => {
              return (
                <div
                  className={`options ${
                    isClicked &&
                    q ===
                      questions.questions[currentQuestionIndex]["correctOption"]
                      ? "green"
                      : "white"
                  }`}
                  onClick={(e) => {
                    handleOptionClick(e);
                  }}
                >
                  {q}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
