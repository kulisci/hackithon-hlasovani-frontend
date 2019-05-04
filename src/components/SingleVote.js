import React from 'react';
import styled from 'styled-components';
import { Store } from '../Store';

const VoteContainer = styled.div`
  margin: 2.3rem;
`;

export default props => {
  const { state, dispatch } = React.useContext(Store);
  let [ numberOfPeople, setNumberOfPeople] = React.useState(0);
  let [ countPro, setCountPro] = React.useState(0);
  let [ countProti, setCountProti] = React.useState(0);
  let [ countZdrzelSe, setCountZdrzelSe] = React.useState(0);
  let [ countOmluven, setCountOmluven] = React.useState(0);

  const countVotes = (data) => {
    data.forEach((vote)=>{
      if(vote.stav_hlasovani === "Pro"){
        setCountPro(++countPro);
      }
      if(vote.stav_hlasovani === "Proti"){
        setCountProti(++countProti);
      }
      if(vote.stav_hlasovani === "Omluven"){
        setCountOmluven(++countOmluven);
      }
      if(vote.stav_hlasovani === "Nehlasoval" || vote.stav_hlasovani === "Zdržel se"){
        setCountZdrzelSe(++countZdrzelSe);
      }
      setNumberOfPeople(++numberOfPeople);
    });
  };

  React.useEffect(() => {
    const fetchSingleVote = async () => {
      const data = await fetch(
        `http://192.168.81.24/votingReasons.php?id=${props.match.params.id}`
      );
      const dataJSON = await data.json();
      countVotes(dataJSON);
      return dispatch({
        type: 'FETCH_SINGLE_VOTE',
        payload: dataJSON
      });
    };


  
    
    fetchSingleVote();
   
  }, [dispatch, props.match.params.id]);

  return (
    <VoteContainer>
      <p>Počet:{numberOfPeople}</p><br/>
      <p>Pro:{countPro}</p><br/>
      <p>Proti:{countProti}</p><br/>
      <p>Omluven:{countOmluven}</p><br/>
      <p>Zdrzel se:{countZdrzelSe}</p><br/>
    </VoteContainer>
  );
};
