import React from 'react';
import styled from 'styled-components';
import PieChart from 'react-minimal-pie-chart';
import { Store } from '../Store';

const VoteContainer = styled.div`
  margin: 2.3rem;
`;

const VoteTitle = styled.h3`
  text-align: center;
  font-size: 1.35rem;
  transition: all 0.4s ease;
  margin-bottom: 2rem;
  &:hover {
    transform: translateY(-6px);
  }
`;

export default props => {
  const { state, dispatch } = React.useContext(Store);
  let [numberOfPeople, setNumberOfPeople] = React.useState(0);
  let [countPro, setCountPro] = React.useState(0);
  let [countProti, setCountProti] = React.useState(0);
  let [countZdrzelSe, setCountZdrzelSe] = React.useState(0);
  let [countOmluven, setCountOmluven] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countVotes = data => {
    data.forEach(vote => {
      if (vote.stav_hlasovani === 'Pro') {
        setCountPro(++countPro);
      }
      if (vote.stav_hlasovani === 'Proti') {
        setCountProti(++countProti);
      }
      if (vote.stav_hlasovani === 'Omluven') {
        setCountOmluven(++countOmluven);
      }
      if (
        vote.stav_hlasovani === 'Nehlasoval' ||
        vote.stav_hlasovani === 'Zdržel se'
      ) {
        setCountZdrzelSe(++countZdrzelSe);
      }
      setNumberOfPeople(++numberOfPeople);
    });
    drawChart();
  };

  const drawChart = () => { };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <VoteContainer>
      <VoteTitle>{state.voteData[0] ? state.voteData[0].ppph : ''}</VoteTitle>
      <PieChart
        data={[
          { title: 'Pro', value: countPro, color: '#008000' },
          {
            title: 'Proti',
            value: countProti,
            color: '#ff0000'
          },
          {
            title: 'Omluven',
            value: countOmluven,
            color: '#ffa500'
          },
          {
            title: 'Zdržel se',
            value: countZdrzelSe,
            color: '#000'
          }
        ]}
        style={{ height: '250px' }}
        animate={true}
        animationDuration={1200}
        animationEasing="cubic-bezier(0.6, 0.04, 0.23, 0.335)"
      />
    </VoteContainer>
  );
};
