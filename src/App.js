import React, { useState } from 'react';
import Game from './components/Game/Game';
import OptGame from './components/Game/OptGame';
import AppModeMenu from './components/AppModeMenu/AppModeMenu';

import './App.css';

function App() {
  const [mode, setMode] = useState('Game');

  return (
    <div className="App">
      { mode === 'Game' && <Game mode={mode} />}
      { mode === 'SlowGame' && <Game mode={mode} />}
      { mode === 'OptGame' && <OptGame />}
      <AppModeMenu mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
