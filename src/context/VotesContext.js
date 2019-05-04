import React from 'react';

export const VotesContext = React.createContext();

const VotesProvider = props => {
  const [votes, setVotes] = React.useState({ votes: [] });

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://192.168.87.76/votingReasons.php');
      res.json().then(data => setVotes(data));
    };

    getData();
  }, []);

  return <VotesContext.Provider value={votes} {...props} />;
};

export default VotesProvider;
