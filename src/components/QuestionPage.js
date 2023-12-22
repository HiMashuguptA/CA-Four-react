import React, { useContext, useState } from "react";
import { AppContextx } from "../UseContext/Parentcontext";


export default function QuestionPage({ questions, setPage }) {
  const { correct, isCorrect } = useContext(AppContextx);
  const [count, setCount] = useState(0);
  const { light, isLight } = useContext(AppContextx);
  const [Highlight, isHighlight] = useState(true);
  
  const { text, options } = questions[count];
  
  function next(para) {
    if (count === questions.length - 1) {
      setPage("result");
    } else {
      setCount(count + 1);
    }
    if (para && para.isCorrect == true) {
      isCorrect(correct + 1);
      console.log(correct);
    }
  }
  function color() {
    isLight(!light);
  }
  function highlights() {
    isHighlight(false);
  }
  function removehighlights() {
    isHighlight(true);
  }
  return (
    <main>
      <div className={light ? "body-questionPage" : "body-questionPage2"}>
        <div className={Highlight ? "Question-div" : "Question-div2"}>
          <div className="Ques-section">
            <button
              onClick={color}
              className="bg-control-btn"
              style={{
                background: light ? "#6A2CAB" : "black"}}
            >
              {light ? "Dark" : "Light"}
            </button>
          </div>
          <div
            className="ques-div-2"
          >
            <h2
              className="Ques-text"
              style={{ color: `${Highlight ? "black" : "white"}` }}
            >
              <span
              className="ques-text"
              >
                Q{count+1}.
              </span>
              {text}
            </h2>
          </div>
          <div
            className="ques-options"
          >
            <button
              onClick={() => {
                next(options[0]);
              }}
              className="Question-btn"
            >
              A. {options[0].text}
            </button>
            <button
              onClick={() => {
                next(options[1]);
              }}
              className="Question-btn"
            >
              B. {options[1].text}
            </button>
            <button
              onClick={() => {
                next(options[2]);
              }}
              className="Question-btn"
            >
              C. {options[2].text}
            </button>
            <button
              onClick={() => {
                next(options[3]);
              }}
              className="Question-btn"
            >
              D. {options[3].text}
            </button>
          </div>
          <div
            className="highlights-button-div"
          >
            <button
              onClick={highlights}
              className="highlights-btns"
              style={{
                background: light ? "#984EFF" : "black"
              }}
            >
              Highlights
            </button>
            <button
              onClick={removehighlights}
              className="highlights-btns"
              style={{
                background: light ? "#984EFF" : "black"
              }}
            >
              Remove Highlights
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
