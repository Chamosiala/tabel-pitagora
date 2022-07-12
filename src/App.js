import React, { useEffect } from 'react';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import GameTable from './components/GameTable';
import { useDispatch, useSelector } from 'react-redux';
import Question from './components/Question';
import Timer from './components/Timer';
import { setTimerOn } from './redux/timer/actions';
import GameButtons from './components/GameButtons';
import ModeSelect from './components/ModeSelect';
import LevelSelect from './components/LevelSelect';
import { resetGameResults, setGameResults } from './redux/gameResults/actions';
import { resetNumbers, setNumbersByLevel } from './redux/numbers/actions';
import { setQuestion } from './redux/question/actions';
import { setActiveRowsAndColsByLevel } from './redux/activeRowsAndCols/actions';
import theme from './theme';

function App() {
  const timer = useSelector(state => state.timer);
  const gameMode = useSelector(state => state.gameMode);
  const level = useSelector(state => state.level);
  const gameResults = useSelector(state => state.gameResults);

  const dispatch = useDispatch();

  const resetGame = () => {
    resetStats();
    dispatch(resetGameResults());
  };

  const loseGame = () => {
    dispatch(setTimerOn(false));
    dispatch(
      setGameResults({
        spentTime: timer.spentTime,
        level,
        isWon: false,
        isFinished: true,
        isLost: true,
      })
    );
    dispatch(resetNumbers());
  };

  const resetStats = () => {
    dispatch(resetNumbers());
    dispatch(setQuestion(''));
  };

  useEffect(() => {
    if (gameResults.isFinished) {
      return;
    }

    if (gameMode === 'nivele') {
      dispatch(setNumbersByLevel(parseInt(level)));
    } else {
      dispatch(setNumbersByLevel(8));
    }
  }, [timer.isOn]);

  useEffect(() => {
    dispatch(setActiveRowsAndColsByLevel(level));
  }, [level]);

  return (
    <ChakraProvider theme={theme}>
      <Flex ml="auto">
        <ColorModeSwitcher ml="auto" />
      </Flex>
      <Flex mx="auto" maxW="1100px" w="100%">
        <GameTable />
        <Box className="gameInterface" ml={5}>
          <Flex mb={5}>
            <Question />
          </Flex>
          <Timer loseGame={loseGame} />
          {!timer.isOn ? <ModeSelect /> : null}
          {gameMode === 'nivele' && !timer.isOn ? <LevelSelect /> : null}
          <GameButtons resetGame={resetGame} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
