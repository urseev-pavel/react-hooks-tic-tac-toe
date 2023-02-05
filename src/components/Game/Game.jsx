import React from 'react';
import GameContextProvider from '../../context/Game.context';
import Board from '../Board/Board';
import SlowBoard from '../Board/SlowBoard';

export default function Game({ mode }) {
  return (
    <div className="game">
      <div className="logo">Tic-Tac-Toe</div>
      <GameContextProvider>
        { mode === 'Game' && <Board />}
        { mode === 'SlowGame' && <SlowBoard />}
      </GameContextProvider>
    </div>
  );
}
