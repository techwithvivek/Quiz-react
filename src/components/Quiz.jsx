import React, { useState } from 'react'
import './Quiz.css'
import QuestionsList from './QuestionsList'

export default function Quiz() {

const questions = [
  {
    question:"1.What is React?",
    options: ['CSS framwork',"React Library", "React Framework", "tasting tool"],
    answer: "React Library"
  },
  {
    question: "2.What is 2 + 2",
    options: ['3', '4', '5','6'],
    answer: '4'
  },
  {
    question:"3.What is React primarily used for?",
    options: [' Server-side rendering','Building user interfaces',' Managing databases','Writing backend APIs',],
    answer: "Building user interfaces"
  },
  {
    question: "4.What is the correct way to create a component in React?",
    options: ['function MyComponent { return <div>Hello</div> }', 'function MyComponent() { return <div>Hello</div>; }', 'function MyComponent() <div>Hello</div>','function MyComponent[] { return <div>Hello</div>; }'],
    answer: 'function MyComponent() { return <div>Hello</div>; }'
  },
  {
    question: "5.Which method is used to update the state in a React class component?",
    options: ['setState()', 'changeState()', 'updateState()','this.setState()'],
    answer: 'this.setState()'
  },
  {
    question: "6.What is JSX?",
    options: ['A library for React', 'A syntax extension for JavaScript', 'A type of stylesheet in React','A database querying language'],
    answer: 'A syntax extension for JavaScript'
  },
  {
    question: "7.Which React feature allows sharing logic between components?",
    options: ['All of the above', 'React Hooks', 'React Context','Higher-Order Components (HOCs)'],
    answer: 'All of the above'
  },
  {
    question: "8.What is 15% of 200?",
    options: ['25', '28', '30','33'],
    answer: '30'
  },
  {
    question: "9.What is the square root of 144?",
    options: ['12', '10', '15','14'],
    answer: '12'
  },
  {
    question: "10.What is the value of 8+5×28+5×2?",
    options: ['26', '18', '16','22'],
    answer: '18'
  },
]

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [currentAnswer, setCurrentAnswer] = useState(null);
const handleClick= (option) =>{
  setCurrentAnswer(option)
  if(option  === questions[currentQuestionIndex].answer){
    setScore(score+1)
  }
}
const handleNextQuestion = ()=>{
  setCurrentQuestionIndex(currentQuestionIndex + 1);
  setCurrentAnswer(null);
}
const [score, setScore] = useState(0);
  return (
    <div className='text'>
      {currentQuestionIndex <questions.length ? 
      <div>
      <QuestionsList question={questions[currentQuestionIndex].question}
       options={questions[currentQuestionIndex].options} handleClick=
       {handleClick} currentAnswer={currentAnswer}/>
      <button  disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'}
      onClick={handleNextQuestion}>Next Question</button>
    </div> : <div><h3>Your Score is {score}</h3></div>}
      
    </div>
  )
}

 