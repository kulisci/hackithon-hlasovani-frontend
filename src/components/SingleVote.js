import React from 'react';
import styled from 'styled-components';
import { Store } from '../Store';

const VoteContainer = styled.div`
  margin: 2.3rem;
`;

export default props => {
  const { state } = React.useContext(Store);
  const [vote, setVote] = React.useState({});

  React.useEffect(() => {
    setVote(state.votes.find(votes => votes.id === props.match.params.id));
  }, [props.match.params.id, state.votes]);

  return (
    <VoteContainer>
      <p>{vote.popis}</p>
    </VoteContainer>
  );
};
