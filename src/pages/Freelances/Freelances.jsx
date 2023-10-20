import Card from '../../components/Card/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
// import DefaultPicture from '../../assets/profile.png';
import { useEffect, useState } from 'react';
import { Loader } from '../../utils/style/Atoms';

const PageWrapper = styled.div`
  width: 100%;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 30px;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelance() {
  const [freelancersList, setFreelancesProfiles] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        const { freelancersList } = await response.json();
        setFreelancesProfiles(freelancersList);
      } catch (err) {
        console.log('===== error =====', err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  return (
    <PageWrapper>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
      ;
    </PageWrapper>
  );
}

export default Freelance;
