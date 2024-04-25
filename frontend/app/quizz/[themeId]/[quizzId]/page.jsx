const QuizzIdPage = ({ params }) => {
  return (
    <div>
      <h1>Quizz </h1>
      <p>Ceci est la page du quizz avec l'ID: {params.quizzId} </p>
    </div>
  )
}

export default QuizzIdPage
