
function QuestionCard (props) {
  const {questions} = props

  const HTMLQuestions = questions.map((question) => (
    <h3 key={question.id}>
      <div>{question.question}</div>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </h3>
  ))

  return (
    <section>
      <ul className="question-list">{HTMLQuestions}</ul>
    </section>
  )
}

export default QuestionCard
