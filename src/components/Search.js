import React from 'react';
import styled from 'styled-components';
import { Store } from '../Store';

const Input = styled.input`
  width: 100%;
  display: block;
  height: 2rem;
  padding: 5px;
  margin-top: -3rem;
  margin-bottom: 5rem;
`;

export default () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `http://192.168.81.24/votingReasons.php?ppph=${searchTerm}`
      );
      const dataJSON = await data.json();
      return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON
      });
    };

    getData();
  }, [dispatch, searchTerm]);

  const handleChange = e => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return <Input type="text" onChange={handleChange} placeholder="Search..." />;
};
