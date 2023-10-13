import { Link, useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const previous = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const next = questionNumberInt + 1;
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <div>
        <Link to={`/survey/${previous}`}>Previous</Link>
        {questionNumberInt === 10 ? (
          <Link to={`/results`}>Resultats</Link>
        ) : (
          <Link to={`/survey/${next}`}>Next</Link>
        )}
      </div>
    </div>
  );
}

export default Survey;
