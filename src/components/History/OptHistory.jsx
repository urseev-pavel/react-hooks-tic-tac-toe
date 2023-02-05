import React from 'react';

export default function OptHistory({ history, handleJumpTo }) {
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
