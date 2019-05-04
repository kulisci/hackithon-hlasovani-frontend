import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RepsContainer = styled.div`
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: opacity 1.2s ease;
  margin-top: 5rem;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 7rem;
  grid-gap: 2.5rem;

  @media (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  div {
    border-radius: 3px;
    background-color: white;
    padding: 1rem 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px) scale(1.05);
    }
  }
`;

export default ({ representatives }) => {
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, [representatives]);

  return (
    <RepsContainer isVisible={isVisible}>
      {representatives.length > 0
        ? representatives.map(rep => (
          <Link to={`/votersinfo/${rep.radove_cislo}`}>
            <div>
              <p>
                {rep.jmeno} {rep.prijmeni}
              </p>
              <p>{rep.politicka_strana}</p>
            </div>
          </Link>
      ))
    : ''}
    </RepsContainer>
  );
};
