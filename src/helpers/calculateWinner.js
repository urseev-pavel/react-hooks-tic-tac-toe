export default function calculateWinner(currentSquares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winLines.length; i += 1) {
    const [a, b, c] = winLines[i];
    if (currentSquares[a]
      && currentSquares[a] === currentSquares[b]
      && currentSquares[a] === currentSquares[c]) {
      return currentSquares[a];
    }
  }

  if (currentSquares.every((el) => el)) {
    return 'FRENDSHIP';
  }

  return null;
}
