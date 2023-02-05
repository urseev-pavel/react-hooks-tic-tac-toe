import React from 'react';

export default function Square({ squareValue, onClick }) {
  console.log('RENDER SQUARE');
  return (
    <button type="button" className="square" onClick={onClick}>
      {squareValue}
    </button>
  );
}
