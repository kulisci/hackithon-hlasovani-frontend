import React from 'react';
import VotesReducer from './reducers/VotesReducer';

export const Store = React.createContext();

const initialState = {
  votes: [],
  voteData: []
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(VotesReducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
