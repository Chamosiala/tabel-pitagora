import { Heading, Box } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setAnsweredCorretly } from '../redux/answeredCorrectly/actions';
import { setQuestion } from '../redux/question/actions';
import { setTimerOn } from '../redux/timer/actions';
import { setGameResults } from '../redux/gameResults/actions';

const Question = () => {
  const question = useSelector(state => state.question);
  const numbers = useSelector(state => state.numbers);
  const timer = useSelector(state => state.timer);
  const gameMode = useSelector(state => state.gameMode);
  const level = useSelector(state => state.level);
  const gameResults = useSelector(state => state.gameResults);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      gameMode === 'nivele' &&
      numbers.numbers.length > 0 &&
      numbers.isFiltered
    ) {
      dispatch(
        setQuestion(
          numbers.numbers[
            Math.floor(Math.random() * numbers.numbers.length)
          ].toString()
        )
      );
    } else if (gameMode === 'ordine' && numbers.numbers.length > 0) {
      dispatch(setQuestion(numbers.numbers[0].toString()));
    } else if (gameMode === 'operatii' && numbers.numbers.length > 0) {
      dispatch(setQuestion('aaa'));
    } else if (numbers.numbers.length === 0) {
      dispatch(setQuestion('Ai câștigat!'));
      dispatch(setTimerOn(false));
      dispatch(
        setGameResults({
          spentTime: timer.spentTime,
          level,
          isWon: true,
          isFinished: true,
          gameMode,
        })
      );
    } else if (gameResults.isLost) {
      dispatch(setQuestion('Ai pierdut!'));
    }
    dispatch(setAnsweredCorretly(false));
  }, [numbers.isFiltered, numbers.numbers.length]);

  return (
    <Box w="300px">
      <Heading
        textAlign="center"
        h="85px"
        lineHeight="85px"
        textColor="black"
        backgroundColor="tan"
        mb="auto"
      >
        {timer.isOn || gameResults.isFinished ? question : ''}
      </Heading>
    </Box>
  );
};

export default Question;
