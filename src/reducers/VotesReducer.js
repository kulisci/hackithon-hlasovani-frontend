export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, votes: action.payload };
    case 'FETCH_SINGLE_VOTE':
      return { ...state, voteData: action.payload };
    default:
      return state;
  }
}
