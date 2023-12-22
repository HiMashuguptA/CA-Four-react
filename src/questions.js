const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "user interface framework", isCorrect: true },
      { id: 2, text: "both a and b", isCorrect: false },
      { id: 3, text: "none of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true},
      { id: 1, text: "Java", isCorrect:  false },
      { id: 2, text: "C", isCorrect:  false },
      { id: 3, text: "C++", isCorrect:  false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect:  false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect:  false },
      { id: 3, text: "None of the above.", isCorrect:  false },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: " Pair of current state and function updating it", isCorrect: false },
      { id: 1, text: "Current State", isCorrect:  false },
      { id: 2, text: "Function updating the current state", isCorrect:  false },
      { id: 3, text: "UseState returns nothing", isCorrect:  true },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { id: 0, text: "1", isCorrect: true },
      { id: 1, text: "2", isCorrect:  false },
      { id: 2, text: "3", isCorrect:  false },
      { id: 3, text: "4", isCorrect:  false },
    ],
  },
  {
    text: "What does JSX stand for?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "Java Syntax Extension", isCorrect: false },
      { id: 2, text: "JSON Extensible", isCorrect: false },
      { id: 3, text: "JavaScript and XML", isCorrect: false },
    ],
  },
  {
    text: "In React, what is the purpose of the useEffect hook?",
    options: [
      { id: 0, text: "To declare state variables", isCorrect: false },
      { id: 1, text: "To perform side effects in function components", isCorrect: true },
      { id: 2, text: "To handle form submissions", isCorrect: false },
      { id: 3, text: "To create custom hooks", isCorrect: false },
    ],
  },
  {
    text: "What is the virtual DOM in React?",
    options: [
      { id: 0, text: "A backup copy of the actual DOM", isCorrect: false },
      { id: 1, text: "An in-memory representation of the actual DOM elements", isCorrect: true },
      { id: 2, text: "A separate DOM used for testing purposes", isCorrect: false },
      { id: 3, text: "A JavaScript library for DOM manipulation", isCorrect: false },
    ],
  },
  {
    text: "How can you pass data from a parent component to a child component in React?",
    options: [
      { id: 0, text: "Using state only", isCorrect: false },
      { id: 1, text: "Using props", isCorrect: true },
      { id: 2, text: "Using context API", isCorrect: false },
      { id: 3, text: "Using refs", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the React Router library?",
    options: [
      { id: 0, text: "To manage state in React applications", isCorrect: false },
      { id: 1, text: "To create and navigate between different pages in a React app", isCorrect: true },
      { id: 2, text: "To handle asynchronous operations", isCorrect: false },
      { id: 3, text: "To perform server-side rendering", isCorrect: false },
    ],
  },
];

export default questions;