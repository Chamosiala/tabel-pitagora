const answeredCorrectlyReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_ANSWERED_CORRECTLY':
      return action.payload ? action.payload : null;
    default:
      return state;
  }
};

export default answeredCorrectlyReducer;
