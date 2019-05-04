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
  &:hover:after {
    transition: background 0.2s ease;
    background: linear-gradient(
      to right,
      rgba(238, 238, 238, 0),
      rgba(238, 238, 238, 1) 50%
    );
  }
  &:focus {
    border-radius: 0.5rem;
    outline: 0;
    border: 1px solid blue;
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

  React.useEffect(() => {
    const fetchDataAction = async () => {
      const data = await fetch('http://192.168.81.24/votingReasons.php');
      const dataJSON = await data.json();
      return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON
      });
    };

    fetchDataAction();
  }, [dispatch]);

  return (
    <ButtonWraper>
      {state.votes.map(vote => (
        <Link key={vote.id} to={`/vote/${vote.id}`}>
          <Button title={vote.popis}>{vote.popis}</Button>
        </Link>
      ))}
    </ButtonWraper>
  );
};
