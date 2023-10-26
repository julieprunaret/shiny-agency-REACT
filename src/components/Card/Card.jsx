import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '../../utils/hooks';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//we create a component of style
//on lui donne un nom et son élément (ce sera un span) ainsi que son style
const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  transition: 200ms;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card({ label, title, picture }) {
  const { theme } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? '⭐️' : '';

  return (
    <CardWrapper onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme}>
        <span>
          {star} {title} {star}
        </span>
      </CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '',
  label: '',
  picture: 'DefaultPicture',
};

export default Card;
