import React, { useContext, useState } from "react";
import { AppContextx } from "../UseContext/Parentcontext";

export default function AnswerBox({ setPage }) {
  const { correct, isCorrect } = useContext(AppContextx);
  const { light, isLight } = useContext(AppContextx);
  function quizPage() {
    window.location.href=window.location.href
  }
  var accuracy = Math.floor((correct / 10) * 100);
  function color() {
    console.log(light);
    isLight(!light);
    console.log(light);
  }
  var textContent = "";
  if (accuracy <= 30) {
    textContent = "Skills Issue💩";
  } else if (accuracy > 30 && accuracy <= 60) {
    textContent = "Need Hard Work🐔";
  } else if (accuracy > 60 && accuracy <= 99) {
    textContent = "You can Do better next Time🥲";
  } else if (accuracy == 100) {
    textContent = "Don't study, You are already God In This🦁";
  }
  return (
    <main>
      <div className={light ? "body-questionPage" : "body-questionPage2"}>
        <div
          className="Result-Div"
          style={{
            background: light
              ? "rgba(255, 255, 255, 0.94)"
              : "rgba(134, 129, 129, 0.652)",
          }}
        >
          <div
            className="Result-div"
          >
            <button
              onClick={color}
              className="btn-bg"
              style={{
                background: light ? "#6A2CAB" : "black"
              }}
            >
              {light ? "Dark" : "Light"}
            </button>
          </div>
          <img className="Answer-img1" src="Answebox-emoji1.png" />
          <img className="Answer-img2" src="Answebox-emoji2.png" />
          <img className="Answer-img3" src="Answebox-emoji3.png" />
          <h2 className="Wiining-quoats">{textContent}</h2>
          <h2 className="Answer-quoats">
            You Have marked {correct} Correct answer - {accuracy}% Accuracy
          </h2>
          <button
            onClick={quizPage}
            className="Play-Again"
            style={{ background: light ? "#6A2CAB" : "black", color: "white" }}
          >
            Play Again
          </button>
        </div>
      </div>
    </main>
  );
}
