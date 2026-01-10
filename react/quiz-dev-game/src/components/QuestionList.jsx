function QuestionList () {
  const token = "E8gicbMZ65qiMyVBRjknQDZbrDuaT2ZJZLRpimsJ"

  const [questions, setQuestions] = useState([])

  const fetchQuestions = async (url) => {
    const response = await fetch(url, {
        headers: {
          "X-Api-Key": token
        }
    })

    if(!response.ok) {
      throw new Error("Error al obtener las preguntas")
    }

    const data = await response.json()
    return data
  }

  useEffect(() => {
    fetchQuestions("https://quizapi.io/api/v1/questions?limit=5")
      .then(setQuestions)
      .catch(console.error);
  }, []); // Estos [] son para que se monte sólo una vez


  return (
    <div>QuestionList</div>
  )
}

export default QuestionList
