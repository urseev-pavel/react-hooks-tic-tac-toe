import React, { useContext } from 'react';
import { GameContext } from '../../context/Game.context';

export default function History() {
  const { history, handleJumpTo } = useContext(GameContext);

  return (
    <ol className="history">
      <p>Game History:</p>
      {history.map((_, move) => (
        <li key={move}>
          <button
            type="button"
            onClick={() => handleJumpTo(move)}
          >
            {move ? `Go to Move #${move}` : 'Go to Game Start'}
          </button>
        </li>
      ))}
    </ol>
  );
}
