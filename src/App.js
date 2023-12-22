import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import HomePage from "./components/HomePage";
import AnswerBox from "./components/AnswerBox";
import QuestionPage from "./components/QuestionPage";
 import Figma from "./components/Figma";
import Design from "./Design";
import HtmlQues from "./HtmlQues";
import Html from "./components/Html";
import Cssquiz from "./Cssquiz";
import Css from "./components/Css";






function App() {
  const [page, setPage] = useState("main"); // Fix: Corrected the state function name

  return (
    <div>
      {
          page === "main" ? 
              <HomePage setpage={setPage} /> 
           : page === "questionpage" ? 
              <QuestionPage questions={questions} setPage={setPage} />
          : page == "result" ? 
              <AnswerBox setPage={setPage}/>
          : page=="figma" ?
              <Figma Design={Design} setPage={setPage}/>
          : page=="html" ?
              <Html HtmlQues={HtmlQues} setPage={setPage}/> 
          : page=="Css" ?
              <Css Cssquiz={Cssquiz} setPage={setPage} /> : " "
      }
    </div>



  )
}

export default App;