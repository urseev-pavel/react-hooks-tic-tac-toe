import React, { useContext } from 'react';
import { GameContext } from '../../context/Game.context';
import checkStatus from '../../helpers/checkStatus';

export default function Status() {
  const { squares, isX } = useContext(GameContext);

  return (
    <div className="status">{checkStatus(squares, isX)}</div>
  );
}
