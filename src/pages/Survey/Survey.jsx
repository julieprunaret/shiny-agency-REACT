import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useEffect, useContext } from 'react';
import { Loader } from '../../utils/style/Atoms';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hooks';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const previous = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const next = questionNumberInt + 1;
  // const [surveyData, setSurveyData] = useState({});
  // const [isDataLoading, setDataLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { saveAnswers, answers } = useContext(SurveyContext);

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const { surveyData } = data;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
    console.log(answers);
  }

  useEffect(() => {
    console.log(answers);
  }, [saveReply]);

  // useEffect(() => {
  //   setDataLoading(true);
  //   fetch(`http://localhost:8000/survey`)
  //     .then((response) => response.json())
  //     .then(({ surveyData }) => {
  //       setSurveyData(surveyData);
  //       setDataLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   async function fetchSurvey() {
  //     setDataLoading(true);
  //     try {
  //       const response = await fetch(`http://localhost:8000/survey`);
  //       const { surveyData } = await response.json();
  //       setSurveyData(surveyData);
  //     } catch (err) {
  //       console.log('===== error =====', err);
  //       setError(true);
  //     } finally {
  //       setDataLoading(false);
  //     }
  //   }
  //   fetchSurvey();
  // }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData ? surveyData[questionNumber] : console.log('bah non')}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        <Link to={`/survey/${previous}`}>Previous</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${next}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
}

export default Survey;
