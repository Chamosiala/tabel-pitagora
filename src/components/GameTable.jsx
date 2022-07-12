import { Grid } from '@chakra-ui/react';
import NumberCell from './NumberCell';

const GameTable = () => {
  return (
    <Grid
      h="700px"
      w="700px"
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(10, 1fr)"
      border="1px solid black"
    >
      <NumberCell number={'1'} row={0} col={0} _bg="tan" />
      <NumberCell number={'2'} row={0} col={1} _bg="tan" />
      <NumberCell number={'3'} row={0} col={2} _bg="tan" />
      <NumberCell number={'4'} row={0} col={3} _bg="tan" />
      <NumberCell number={'5'} row={0} col={4} _bg="tan" />
      <NumberCell number={'6'} row={0} col={5} _bg="tan" />
      <NumberCell number={'7'} row={0} col={6} _bg="tan" />
      <NumberCell number={'8'} row={0} col={7} _bg="tan" />
      <NumberCell number={'9'} row={0} col={8} _bg="tan" />
      <NumberCell number={'10'} row={0} col={9} _bg="tan" />
      <NumberCell number={'2'} row={1} col={0} _bg="tan" />
      <NumberCell
        number={'4'}
        row={1}
        col={1}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'6'} row={1} col={2} _hidden={true} />
      <NumberCell number={'8'} row={1} col={3} _hidden={true} />
      <NumberCell number={'10'} row={1} col={4} _hidden={true} />
      <NumberCell number={'12'} row={1} col={5} _hidden={true} />
      <NumberCell number={'14'} row={1} col={6} _hidden={true} />
      <NumberCell number={'16'} row={1} col={7} _hidden={true} />
      <NumberCell number={'18'} row={1} col={8} _hidden={true} />
      <NumberCell number={'20'} row={1} col={9} _hidden={true} />
      <NumberCell number={'3'} row={2} col={0} _bg="tan" />
      <NumberCell number={'6'} row={2} col={1} _hidden={true} />
      <NumberCell
        number={'9'}
        row={2}
        col={2}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'12'} row={2} col={3} _hidden={true} />
      <NumberCell number={'15'} row={2} col={4} _hidden={true} />
      <NumberCell number={'18'} row={2} col={5} _hidden={true} />
      <NumberCell number={'21'} row={2} col={6} _hidden={true} />
      <NumberCell number={'24'} row={2} col={7} _hidden={true} />
      <NumberCell number={'27'} row={2} col={8} _hidden={true} />
      <NumberCell number={'30'} row={2} col={9} _hidden={true} />
      <NumberCell number={'4'} row={3} col={0} _bg="tan" />
      <NumberCell number={'8'} row={3} col={1} _hidden={true} />
      <NumberCell number={'12'} row={3} col={2} _hidden={true} />
      <NumberCell
        number={'16'}
        row={3}
        col={3}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'20'} row={3} col={4} _hidden={true} />
      <NumberCell number={'24'} row={3} col={5} _hidden={true} />
      <NumberCell number={'28'} row={3} col={6} _hidden={true} />
      <NumberCell number={'32'} row={3} col={7} _hidden={true} />
      <NumberCell number={'36'} row={3} col={8} _hidden={true} />
      <NumberCell number={'40'} row={3} col={9} _hidden={true} />
      <NumberCell number={'5'} row={4} col={0} _bg="tan" />
      <NumberCell number={'10'} row={4} col={1} _hidden={true} />
      <NumberCell number={'15'} row={4} col={2} _hidden={true} />
      <NumberCell number={'20'} row={4} col={3} _hidden={true} />
      <NumberCell
        number={'25'}
        row={4}
        col={4}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'30'} row={4} col={5} _hidden={true} />
      <NumberCell number={'35'} row={4} col={6} _hidden={true} />
      <NumberCell number={'40'} row={4} col={7} _hidden={true} />
      <NumberCell number={'45'} row={4} col={8} _hidden={true} />
      <NumberCell number={'50'} row={4} col={9} _hidden={true} />
      <NumberCell number={'6'} row={5} col={0} _bg="tan" />
      <NumberCell number={'12'} row={5} col={1} _hidden={true} />
      <NumberCell number={'18'} row={5} col={2} _hidden={true} />
      <NumberCell number={'24'} row={5} col={3} _hidden={true} />
      <NumberCell number={'30'} row={5} col={4} _hidden={true} />
      <NumberCell
        number={'36'}
        row={5}
        col={5}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'42'} row={5} col={6} _hidden={true} />
      <NumberCell number={'48'} row={5} col={7} _hidden={true} />
      <NumberCell number={'54'} row={5} col={8} _hidden={true} />
      <NumberCell number={'60'} row={5} col={9} _hidden={true} />
      <NumberCell number={'7'} row={6} col={0} _bg="tan" />
      <NumberCell number={'14'} row={6} col={1} _hidden={true} />
      <NumberCell number={'21'} row={6} col={2} _hidden={true} />
      <NumberCell number={'28'} row={6} col={3} _hidden={true} />
      <NumberCell number={'35'} row={6} col={4} _hidden={true} />
      <NumberCell number={'42'} row={6} col={5} _hidden={true} />
      <NumberCell
        number={'49'}
        row={6}
        col={6}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'56'} row={6} col={7} _hidden={true} />
      <NumberCell number={'63'} row={6} col={8} _hidden={true} />
      <NumberCell number={'70'} row={6} col={9} _hidden={true} />
      <NumberCell number={'8'} row={7} col={0} _bg="tan" />
      <NumberCell number={'16'} row={7} col={1} _hidden={true} />
      <NumberCell number={'24'} row={7} col={2} _hidden={true} />
      <NumberCell number={'32'} row={7} col={3} _hidden={true} />
      <NumberCell number={'40'} row={7} col={4} _hidden={true} />
      <NumberCell number={'48'} row={7} col={5} _hidden={true} />
      <NumberCell number={'56'} row={7} col={6} _hidden={true} />
      <NumberCell
        number={'64'}
        row={7}
        col={7}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'72'} row={7} col={8} _hidden={true} />
      <NumberCell number={'80'} row={7} col={9} _hidden={true} />
      <NumberCell number={'9'} row={8} col={0} _bg="tan" />
      <NumberCell number={'18'} row={8} col={1} _hidden={true} />
      <NumberCell number={'27'} row={8} col={2} _hidden={true} />
      <NumberCell number={'36'} row={8} col={3} _hidden={true} />
      <NumberCell number={'45'} row={8} col={4} _hidden={true} />
      <NumberCell number={'54'} row={8} col={5} _hidden={true} />
      <NumberCell number={'63'} row={8} col={6} _hidden={true} />
      <NumberCell number={'72'} row={8} col={7} _hidden={true} />
      <NumberCell
        number={'81'}
        row={8}
        col={8}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
      <NumberCell number={'90'} row={8} col={9} _hidden={true} />
      <NumberCell number={'10'} row={9} col={0} _bg="tan" />
      <NumberCell number={'20'} row={9} col={1} _hidden={true} />
      <NumberCell number={'30'} row={9} col={2} _hidden={true} />
      <NumberCell number={'40'} row={9} col={3} _hidden={true} />
      <NumberCell number={'50'} row={9} col={4} _hidden={true} />
      <NumberCell number={'60'} row={9} col={5} _hidden={true} />
      <NumberCell number={'70'} row={9} col={6} _hidden={true} />
      <NumberCell number={'80'} row={9} col={7} _hidden={true} />
      <NumberCell number={'90'} row={9} col={8} _hidden={true} />
      <NumberCell
        number={'100'}
        row={9}
        col={9}
        _hidden={true}
        isBold={true}
        _bg="tan"
      />
    </Grid>
  );
};

export default GameTable;
