import React, { useContext, useMemo } from 'react';
import { GameContext } from '../../context/Game.context';
import highLoadCalcGenerate from '../../helpers/highLoadCalcGenerate';
import Square from '../Square/Square';
import Status from '../Status/Status';
import History from '../History/History';

export default function Board() {
  const { renderSquare, handleRestart } = useContext(GameContext);

  // !!! Generate high load calculation
  const calculationFinishMessage = 'CALCULATION FINISHED';
  const memoizedCalculationResult = useMemo(
    () => highLoadCalcGenerate(calculationFinishMessage),
    [calculationFinishMessage],
  );
  console.log('memoizedCalculationResult ===>', memoizedCalculationResult);

  return (
    <>
      <div className="board">
        {renderSquare(0, Square)}
        {renderSquare(1, Square)}
        {renderSquare(2, Square)}
        {renderSquare(3, Square)}
        {renderSquare(4, Square)}
        {renderSquare(5, Square)}
        {renderSquare(6, Square)}
        {renderSquare(7, Square)}
        {renderSquare(8, Square)}
      </div>
      <button
        type="button"
        className="restart"
        onClick={handleRestart}
      >
        Restart Game!
      </button>
      <Status />
      <History />
    </>
  );
}
