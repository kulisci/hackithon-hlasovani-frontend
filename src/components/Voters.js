import React from 'react';
import VotersContext from '../context/VotersContext';
import styled from 'styled-components';

const VotersDiv = styled.div`

`;

const VotersP = styled.p`

`;


export default () => {
  const { voters } = React.useContext(VotersContext);

  return (
    <div>
      {voters.map((voter, i) => (
        <p key={i}>{voter.name}</p>
      ))}
    </div>
  );
};
