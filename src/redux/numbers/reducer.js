import LISTA_NUMERE from '../../constants/LISTA_NUMERE';

const numbersReducer = (
  state = { numbers: LISTA_NUMERE, isFiltered: false },
  action
) => {
  switch (action.type) {
    case 'RESET_NUMBERS':
      return { numbers: LISTA_NUMERE, isFiltered: false };
    case 'REMOVE_NUMBER':
      const idx = state.numbers.findIndex(n => n === action.payload);
      state.numbers.splice(idx, 1);
      return state;
    case 'SET_NUMBERS_BY_LEVEL':
      switch (action.payload) {
        case 1:
          return { numbers: LISTA_NUMERE.slice(0, 17), isFiltered: true };
        case 2:
          return { numbers: LISTA_NUMERE.slice(0, 32), isFiltered: true };
        case 3:
          return { numbers: LISTA_NUMERE.slice(0, 45), isFiltered: true };
        case 4:
          return { numbers: LISTA_NUMERE.slice(0, 56), isFiltered: true };
        case 5:
          return { numbers: LISTA_NUMERE.slice(0, 65), isFiltered: true };
        case 6:
          return { numbers: LISTA_NUMERE.slice(0, 72), isFiltered: true };
        case 7:
          return { numbers: LISTA_NUMERE.slice(0, 77), isFiltered: true };
        case 8:
          return { numbers: LISTA_NUMERE.slice(0, 81), isFiltered: true };
        default:
          return { numbers: LISTA_NUMERE, isFiltered: false };
      }
    default:
      return state;
  }
};

export default numbersReducer;

// level 1: 17
// level 2: +15
// level 3: +13
