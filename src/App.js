import React from 'react';
import VotersContext from './context/VotersContext';

function App() {
  const { voters } = React.useContext(VotersContext);
  return (
    <div>
      {voters.map((voter, i) => (
        <p key={i}>{voter.name}</p>
      ))}
    </div>
  );
}

export default App;
