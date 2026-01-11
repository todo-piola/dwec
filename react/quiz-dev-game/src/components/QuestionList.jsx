import axios from 'axios'
import { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard.jsx'

function QuestionList () {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=20")
      .then((res) => {
        const preguntasFormateadas = res.data.results.map((questionItem, index) => {
          const respuestas = [...questionItem.incorrect_answers, questionItem.correct_answer]
          return {
            id: index,
            question: questionItem.question,
            correct_answer: questionItem.correct_answer,
            options: respuestas.sort(() => Math.random() - 0.5)
          }
        })
        setQuestions(preguntasFormateadas)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  },[])

  if (loading) return <p className="loading-msg">Cargando preguntas...</p>;

  return (
    <QuestionCard questions={questions}/>
  )
}

export default QuestionList
