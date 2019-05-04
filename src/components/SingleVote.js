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
      <Pie
     radius={70}
     //completly filled pie chart with radius 70
     series={[10, 20, 30, 40]}
     //values to show and color sequentially
     colors={['#f00', '#0f0', '#00f', '#ff0']}
/>
    </div>
  );
};
