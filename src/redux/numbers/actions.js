export const resetNumbers = () => {
  return {
    type: 'RESET_NUMBERS',
  };
};

export const removeNumber = number => {
  return {
    type: 'REMOVE_NUMBER',
    payload: parseInt(number),
  };
};

export const setNumbersByLevel = level => {
  return {
    type: 'SET_NUMBERS_BY_LEVEL',
    payload: level,
  };
};
