import React, { useState } from 'react';
import calculateWinner from '../helpers/calculateWinner';

export const GameContext = React.createContext();

export default function GameContextProvider({ children }) {
  const [isX, setIsX] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const handleSquareClick = (squareIndex) => {
    const currentSquares = [...history[stepNumber]];
    if (calculateWinner(currentSquares) || currentSquares[squareIndex]) {
      return;
    }
    currentSquares[squareIndex] = isX ? 'X' : 'O';
    setIsX(!isX);
    setSquares(currentSquares);
    setHistory([...history.slice(0, stepNumber + 1), currentSquares]);
    setStepNumber(stepNumber + 1);
  };

  const renderSquare = (squareIndex, SquareComponent) => (
    <SquareComponent
      squareValue={squares[squareIndex]}
      onClick={() => handleSquareClick(squareIndex)}
    />
  );

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setIsX(true);
  };

  const handleJumpTo = (step) => {
    setSquares([...history[step]]);
    setStepNumber(step);
    setIsX((step % 2) === 0);
  };

  return (
    <GameContext.Provider value={{
      renderSquare, handleRestart, squares, isX, history, handleJumpTo,
    }}
    >
      {children}
    </GameContext.Provider>
  );
}
