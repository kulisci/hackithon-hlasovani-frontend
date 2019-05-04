import React from 'react';
import { Store } from '../Store';

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
    <div>
      {console.log(state.representatives)}
      {state.representatives.map(
        ({ radove_cislo, jmeno, prijmeni, politicka_strana }) => (
          <p key={radove_cislo}>
            {jmeno} {prijmeni} - {politicka_strana}
          </p>
        )
      )}
    </div>
  );
};
