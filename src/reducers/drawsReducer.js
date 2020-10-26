export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DRAWS':
      return action.payload;
    default:
      return state;
  }
};
