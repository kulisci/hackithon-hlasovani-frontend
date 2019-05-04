import React from 'react';
import styled from 'styled-components';
import { Store } from '../Store';

const VoteContainer = styled.div`
  margin: 2.3rem;
`;

export default props => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const fetchSingleVote = async () => {
      const data = await fetch(
        `http://192.168.81.24/votingReasons.php?id=${props.match.params.id}`
      );
      const dataJSON = await data.json();
      return dispatch({
        type: 'FETCH_SINGLE_VOTE',
        payload: dataJSON
      });
    };

    fetchSingleVote();
  }, [dispatch, props.match.params.id]);

  return (
    <VoteContainer>
      {state.voteData.map(
        ({ id, jmeno, prijmeni, politicka_strana, stav_hlasovani }) => (
          <p key={id}>
            {prijmeni}, {jmeno} - {politicka_strana} - {stav_hlasovani}
          </p>
        )
      )}
    </VoteContainer>
  );
};
