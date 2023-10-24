import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';

function Results() {
  const { answers } = useContext(SurveyContext);
  const answersTab = Object.entries(answers);
  console.log('là', answers);
  console.log('et là', answersTab);
  return (
    <div>
      <h1>Résultats</h1>
      <ul>
        {/* {answersTab.map((answer) => {
          <li>{answer}</li>;
        })} */}
      </ul>
    </div>
  );
}

export default Results;
