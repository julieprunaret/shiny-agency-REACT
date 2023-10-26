import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atoms';
import HomeIllustration from '../../assets/home-illustration.svg';
import { useTheme } from '../../utils/hooks';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeContainer = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.backgroundLight};
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`;

const Illustration = styled.img`
  width: 50%;
  max-width: 550px;
  margin: 0 auto;
`;

export function sum(a, b) {
  return a + b;
}

function Home() {
  const { theme } = useTheme();

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
          {/* {sum(40, 2)} */}
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
