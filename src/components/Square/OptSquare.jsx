import React, { memo } from 'react';

function OptSquare({ squareIndex, squareValue, handleSquareClick }) {
  console.log('RENDER SQUARE', { squareIndex }, { squareValue });
  return (
    <button
      type="button"
      className="square"
      onClick={() => handleSquareClick(squareIndex)}
    >
      {squareValue}
    </button>
  );
}

export default memo(OptSquare);
