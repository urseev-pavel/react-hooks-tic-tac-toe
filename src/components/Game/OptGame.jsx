import React, { useReducer, useCallback } from 'react';
import calculateWinner from '../../helpers/calculateWinner';
import checkStatus from '../../helpers/checkStatus';
import OptBoard from '../Board/OptBoard';
import OptStatus from '../Status/OptStatus';
import OptHistory from '../History/OptHistory';

const initialState = {
  isX: true,
  stepNumber: 0,
  squares: Array(9).fill(null),
  history: [Array(9).fill(null)],
};

function gameReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'MOVE':
      if (calculateWinner(state.squares) || state.squares[payload.index]) {
        console.log('DID NOT MOVE', { payload });
        return state;
      }
      console.log('MOVE', { payload });
      const squares = [...state.squares];
      squares[payload.index] = state.isX ? 'X' : 'O';
      return {
        ...state,
        isX: !state.isX,
        stepNumber: state.stepNumber + 1,
        squares,
        history: [...state.history.slice(0, state.stepNumber + 1), squares],
      };
    case 'JUMP':
      console.log('JUMP', { payload });
      return {
        ...state,
        isX: (payload.step % 2) === 0,
        stepNumber: payload.step,
        squares: [...state.history[payload.step]],
      };
    case 'RESTART':
      console.log('RESTART');
      return { ...state, ...initialState };
    default:
      throw new Error();
  }
}

export default function OptGame() {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const handleSquareClick = useCallback(
    (index) => dispatch({ type: 'MOVE', payload: { index } }),
    [dispatch],
  );

  const handleRestart = () => {
    dispatch({ type: 'RESTART' });
  };

  const handleJumpTo = (step) => {
    dispatch({ type: 'JUMP', payload: { step } });
  };

  return (
    <div className="game">
      <div className="logo">Tic-Tac-Toe</div>
      <OptBoard
        squares={gameState.squares}
        handleSquareClick={handleSquareClick}
      />
      <button
        type="button"
        className="restart"
        onClick={handleRestart}
      >
        Restart Game!
      </button>
      <OptStatus
        status={checkStatus(gameState.squares, gameState.isX)}
      />
      <OptHistory
        history={gameState.history}
        handleJumpTo={handleJumpTo}
      />
    </div>
  );
}
