import calculateWinner from './calculateWinner';

export default function checkStatus(currentSquares, currentIsX) {
  if (calculateWinner(currentSquares)) {
    return `Winner is "${calculateWinner(currentSquares)}"!!!`;
  }

  return `Next Player: ${currentIsX ? '"X"' : '"O"'}`;
}
