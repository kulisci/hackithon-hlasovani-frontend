import React from 'react';
import styled from 'styled-components';
import { Store } from '../Store';

const VotersTable = styled.table`
  background-color: white;
  border: 1px solid black;
  border-collapse: collapse;
  tr:nth-child(even){
    background-color: #eee;
  }
`;

const VotersRow = styled.tr`
`;

const VotersTd = styled.td`
  border: 1px solid black;
  padding-left: 1rem;
`;

const VotersWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.2rem;
  margin: auto 20% 5rem 20%;
  padding: 1rem;
`;

export default () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const fetchRepresentatives = async () => {
      const data = await fetch(
        'http://192.168.81.24/votingReasons.php?chcijmena'
      );
      const dataJSON = await data.json();
      return dispatch({
        type: 'FETCH_REPRESENTATIVES',
        payload: dataJSON
      });
    };

    fetchRepresentatives();
  }, [dispatch]);

  return (
    <VotersWraper>
      <VotersTable>
        {console.log(state.representatives)}
        {state.representatives.map(
          ({ radove_cislo, jmeno, prijmeni, politicka_strana }) => (
            <VotersRow key={radove_cislo}>
              <VotersTd>{jmeno} {prijmeni}</VotersTd><VotersTd>{politicka_strana}</VotersTd>
            </VotersRow>
          )
        )}
      </VotersTable>
    </VotersWraper>
  );
};
