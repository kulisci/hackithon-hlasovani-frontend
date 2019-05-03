import React from 'react';

const voters = [
  {
    name: 'Alois',
    surname: 'Jirásek'
  },
  {
    name: 'Pepa',
    surname: 'Katič'
  }
];

export default React.createContext({ voters });
