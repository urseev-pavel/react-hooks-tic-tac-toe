import React from 'react';

export default function AppModeMenu({ mode, setMode }) {
  return (
    <div className="menu">

      <p>
        Switch App mode
        <br />
        and look on squares rendering
        <br />
        in your browser console:
      </p>

      <div className="mode">
        <input
          onChange={(event) => {
            setMode(event.target.value);
          }}
          id="SlowGame"
          value="SlowGame"
          name="mode"
          type="radio"
          checked={mode === 'SlowGame'}
        />
        <label
          htmlFor="SlowGame"
          className={mode === 'SlowGame' ? 'active' : ''}
        >
          Slow React App
          <br />
          with useContext,
          <br />
          but without useMemo
        </label>
      </div>

      <div className="mode">
        <input
          onChange={(event) => {
            setMode(event.target.value);
          }}
          id="Game"
          value="Game"
          name="mode"
          type="radio"
          checked={mode === 'Game'}
        />
        <label
          htmlFor="Game"
          className={mode === 'Game' ? 'active' : ''}
        >
          Normal React App
          <br />
          with useContext
          <br />
          and useMemo
        </label>
      </div>

      <div className="mode">
        <input
          onChange={(event) => {
            setMode(event.target.value);
          }}
          id="OptGame"
          value="OptGame"
          name="mode"
          type="radio"
          checked={mode === 'OptGame'}
        />
        <label
          htmlFor="OptGame"
          className={mode === 'OptGame' ? 'active' : ''}
        >
          Optimized React App
          <br />
          with useReducer,
          <br />
          useCallback
          <br />
          and React.memo
        </label>
      </div>
    </div>
  );
}
