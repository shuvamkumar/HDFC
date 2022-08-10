import { useEffect, useState } from "react";
import questions from "../config/questions";
import azadi from "../assets/azadi.png";
import logo from "../assets/logo.png";

const Questions = ({ setState, state }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [mark, setMark] = useState(0);
  useEffect(() => {
    setIsClicked(false);
  }, [currentQuestionIndex]);

  const handleOptionClick = (e) => {
    setIsClicked(true);
    console.log(e.target.innerHTML);
    if (
      e.target.innerHTML ===
      questions.questions[currentQuestionIndex]["correctOption"]
    ) {
      setMark(mark + 1);
      console.log(mark);
    }
    if (currentQuestionIndex === questions.questions.length - 1) {
      setTimeout(() => {
        setState(5);
      }, 1000);
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
      {state === 4 ? (
        <>
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
                questions.questions[currentQuestionIndex]["options"].map(
                  (q) => {
                    return (
                      <div
                        className={`options ${
                          isClicked &&
                          q ===
                            questions.questions[currentQuestionIndex][
                              "correctOption"
                            ]
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
                  }
                )}
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {state === 5 && (
            <>
              <h1
                style={{
                  color: "rgb(0, 76, 143)",
                  marginBottom: "0.5rem",
                }}
              >
                Congratulations!!
              </h1>
              <p
                style={{
                  color: "rgb(0, 76, 143)",
                  fontWeight: "600",
                }}
              >
                You have scored...
              </p>
              <div
                style={{
                  border: "3px solid rgb(0, 76, 143)",
                  borderRadius: "50%",
                  width: "8rem",
                  height: "8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    color: "rgb(0, 76, 143)",
                    fontWeight: "700",
                    fontSize: "2rem",
                  }}
                >{`${mark}/10`}</h3>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Questions;
