import React from 'react';
import OptSquare from '../Square/OptSquare';

export default function OptBoard({ squares, handleSquareClick }) {
  return (
    <div className="board">
      {squares.map((el, index) => (
        <OptSquare
          key={index}
          squareIndex={index}
          squareValue={el}
          handleSquareClick={handleSquareClick}
        />
      ))}
    </div>
  );
}
