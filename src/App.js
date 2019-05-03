import React from 'react';
import VotersContext from './context/VotersContext';

function App() {
  const { voters } = React.useContext(VotersContext);
  return (
    <div>
      {voters.map((voter, i) => (
        <div key={i}>{voter.name}<br />{voter.surname}</div>
      ))}
    </div>
  );
}

export default App;
