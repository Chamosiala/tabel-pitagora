import { GridItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../redux/answer/actions';
import { setAnsweredCorretly } from '../redux/answeredCorrectly/actions';
import { removeNumber } from '../redux/numbers/actions';

const NumberCell = ({
  number,
  _hidden = false,
  isBold = false,
  row,
  col,
  _bg = 'white',
}) => {
  const [hidden, setHidden] = useState(_hidden);
  const [bg, setBg] = useState(_bg);
  const [active, setActive] = useState(true);
  const question = useSelector(state => state.question);
  const activeRowsAndCols = useSelector(state => state.activeRowsAndCols);
  const answeredCorrectly = useSelector(state => state.answeredCorrectly);
  const timer = useSelector(state => state.timer);
  const gameMode = useSelector(state => state.gameMode);
  const dispatch = useDispatch();

  const handleClick = number => {
    if (!timer.isOn || !active) {
      return;
    }

    if (number === question && hidden) {
      dispatch(removeNumber(number));
      dispatch(setAnsweredCorretly(true));
      dispatch(setAnswer(number));
    } else if (hidden) {
      setBg('red');
    }
    setHidden(false);
  };

  useEffect(() => {
    if (bg === 'red' && answeredCorrectly) {
      setHidden(true);
      setBg(_bg);
      dispatch(setAnsweredCorretly(false));
    }
  }, [answeredCorrectly]);

  useEffect(() => {
    if (!timer.isOn) {
      return;
    }

    if (_hidden) {
      setHidden(true);
      setBg(_bg);
    }

    if (row === 0 || col === 0) {
      return;
    }

    if (gameMode === 'ordine' || gameMode === 'operatii') {
      setActive(true);
      return;
    }

    if (
      !activeRowsAndCols.includes(row) &&
      !activeRowsAndCols.includes(col) &&
      row !== 0 &&
      col !== 0
    ) {
      setActive(false);
      setBg('gray');
    } else {
      setActive(true);
    }
  }, [timer.isOn, activeRowsAndCols]);

  return (
    <GridItem
      onClick={() => {
        handleClick(number);
      }}
      className="numberCell"
      border="1px solid black"
      bg={bg}
      textColor="black"
      textAlign="center"
    >
      {isBold ? (
        <Text maxHeight="67.8px" fontSize="40px" fontWeight={'bold'}>
          {hidden ? '' : number}
        </Text>
      ) : (
        <Text maxHeight="67.8px" fontSize="40px">
          {hidden ? '' : number}
        </Text>
      )}
    </GridItem>
  );
};

export default NumberCell;
