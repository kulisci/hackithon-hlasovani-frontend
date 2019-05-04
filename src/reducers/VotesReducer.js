export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, votes: action.payload };
    default:
      return state;
  }
}
