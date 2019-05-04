import React from 'react';
import VotersContext from '../context/VotersContext';
import styled from 'styled-components';
import { Store } from '../Store';

const VotersDiv = styled.div`

`;

const VotersP = styled.p`

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
    <VotersDiv>
      {console.log(state.representatives)}
      {state.representatives.map(
        ({ radove_cislo, jmeno, prijmeni, politicka_strana }) => (
          <VotersP key={radove_cislo}>
            {jmeno} {prijmeni} - {politicka_strana}
          </VotersP>
        )
      )}
    </VotersDiv>
  );
};
