import axios from 'axios'
import { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard.jsx'

function QuestionList () {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=20")
      .then((res) => {
        const preguntasFormateadas = res.data.results.map((questionItem, index) => {
          const respuestas = [...questionItem.incorrect_answers, questionItem.correct_answer]
          return {
            id: `${index} - ${Date.now()}`,
            question: questionItem.question,
            correct_answer: questionItem.correct_answer,
            options: respuestas.sort(() => Math.random() - 0.5)
          }
        })
        setQuestions(preguntasFormateadas)
      })
      .catch((error) => console.error(error));
  },[])

  return (
    <QuestionCard questions={questions}/>
  )
}

export default QuestionList
