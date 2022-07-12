import { combineReducers } from 'redux';
import activeRowsAndColsReducer from './activeRowsAndCols/reducer';
import answerReducer from './answer/reducer';
import answeredCorrectlyReducer from './answeredCorrectly/reducer';
import gameModeReducer from './gameMode/reducer';
import gameResultsReducer from './gameResults/reducer';
import levelReducer from './level/reducer';
import numbersReducer from './numbers/reducer';
import questionReducer from './question/reducer';
import timerReducer from './timer/reducer';

const allReducers = combineReducers({
  question: questionReducer,
  answeredCorrectly: answeredCorrectlyReducer,
  numbers: numbersReducer,
  timer: timerReducer,
  level: levelReducer,
  gameResults: gameResultsReducer,
  gameMode: gameModeReducer,
  answer: answerReducer,
  activeRowsAndCols: activeRowsAndColsReducer,
});

export default allReducers;
