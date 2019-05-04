import React from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const Button = styled.button`
  border: 1px solid black;
  min-height: 5rem;
  background-color: white;
  overflow: hidden;
  position: relative;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 1rem 1rem 1rem 1rem;
  transition: all 0.2s ease;
  &:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-5%);
    background-color: #eee;
  }
  &:focus {
    border-radius: 0.5rem;
    outline: 0;
    border: 1px solid blue;
  }
  -moz-box-shadow: 1px 1px 2px 3px #ccc;
  -webkit-box-shadow: 1px 1px 2px 3px #ccc;
  box-shadow: 1px 1px 2px 3px #ccc;
  &:hover {
    -moz-box-shadow: 0px 0px 1px 2px #ccc;
    -webkit-box-shadow: 0px 0px 1px 2px #ccc;
    box-shadow: 0px 0px 1px 2px #ccc;
  }
`;

const ButtonWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.2rem;
  margin: auto 20% auto 20%;
  @media (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default props => {
  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async () => {
    const data = await fetch('http://192.168.87.76/votingReasons.php');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    });
  };

  React.useEffect(() => {
    state.votes.length === 0 && fetchDataAction();
  }, [fetchDataAction, state.votes.length]);

  return (
    <ButtonWraper>
      {state.votes.map(vote => (
        <Link key={vote.id} to={`/vote/${vote.id}`}>
          <Button>{vote.popis}</Button>
        </Link>
      ))}
    </ButtonWraper>
  );
};
