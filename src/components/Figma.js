import React, { useContext, useState } from "react";
import { AppContextx } from "../UseContext/Parentcontext";

export default function Figma({ Design, setPage }) {
    // Using AppContextx
  const { correct, isCorrect } = useContext(AppContextx);
  const [count, setCount] = useState(0);
  const { light, isLight } = useContext(AppContextx);
  const [Highlight, isHighlight] = useState(true);
  
  const { text, options } = Design[count];
  
  function next(para) {
    //  runs till the length of the question and if it is equal to the length of question then it redirects to the result page
    if (count === Design.length - 1) {
      setPage("result");
    } else {
        // increase the count by one every time
      setCount(count + 1);
    }
    if (para && para.isCorrect == true) {
        // checks wheather the answer is true or not
      isCorrect(correct + 1);
    }
  }
//   changing the color
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
        {/* Using Ternary operator to print one value at a time */}
      <div className={light ? "body-questionPage" : "body-questionPage2"}>
        <div className={Highlight ? "Question-div" : "Question-div2"}>
          <div className="Ques-section">
            {/* chnage the background color of the button  */}
            <button
              onClick={color}
              className="bg-control-btn"
              style={{
                background: light ? "#6A2CAB" : "black"
              }}
            >
                {/* chnage the text */}
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
            // Targets The index of options 
              onClick={() => {
                next(options[0]);
              }}
              className="Question-btn"
            >
                 {/* Shows options */}
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
            {/* On clicking Hihlights the button */}
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
            //Remove the highlights
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
