import React, { useContext, useState } from "react";
import { AppContextx } from "../UseContext/Parentcontext";


export default function QuestionPage({ questions, setPage }) {
    // bringing state values from AppContextx
  const { correct, isCorrect } = useContext(AppContextx);
  const [count, setCount] = useState(0);
  const { light, isLight } = useContext(AppContextx);
  const [Highlight, isHighlight] = useState(true);
  
  const { text, options } = questions[count];
  //   function given to make question next on every click and redirected to the Result page
  function next(para) {
    if (count === questions.length - 1) {
      setPage("result");
    } else {
      setCount(count + 1);
    }
        // checking answers, if options is true then correct will be increased
    if (para && para.isCorrect == true) {
      isCorrect(correct + 1);
      console.log(correct);
    }
  }
  //   changing the color
  function color() {
    isLight(!light);
  }
  //   giving highlights 
  function highlights() {
    isHighlight(false);
  }
  //   removing highlights, making to default
  function removehighlights() {
    isHighlight(true);
  }
  return (
    <main>
        {/* using conditional rendering to change the background color */}
      <div className={light ? "body-questionPage" : "body-questionPage2"}>
        {/* chnaging highlights based on user click on button */}
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
            {/* change the font color of the Quiz */}
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
                // Targets The index of options 
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
