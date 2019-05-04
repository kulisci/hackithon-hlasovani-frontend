import React from 'react';
import { Store } from '../Store';

export default props => {
  const { state } = React.useContext(Store);
  const [vote, setVote] = React.useState({});

  React.useEffect(() => {
    setVote(state.votes.find(votes => votes.id === props.match.params.id));
  }, [props.match.params.id, state.votes]);

  return (
    <div>
      <p>{vote.popis}</p>
    </div>
  );
};
