import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const [showClear, setShowClear] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const buttons = [
    {
      text: 'Add + 1',
      onClick: () => {
        setCount(count + 1);
      },
    },
    {
      text: 'Subtract - 1',
      onClick: () => {
        setCount(count - 1);
      },
    },
    {
      text: 'Multiply by 2',
      onClick: () => {
        setCount(count * 2);
      },
    },
    {
      text: 'Divide by 2',
      onClick: () => {
        setCount(count / 2);
      },
    },
  ];
  /* {(count % 10 == 7) ? {color: 'gold'} : {color: 'black'}} */
  return (
    <section>
      <input
        type="text"
        placeholder="Text here"
        // Hooks value of input together with inputValue state
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => {
        setInputValue('');
      }}
      >
        Clear input
      </button>
      <h1>
        {count}
        <br />
        {inputValue}
      </h1>
      {buttons.map(({ text, onClick }) => (
        <button
          key={text}
          onClick={onClick}
        >
          {text}
        </button>
      ))}
      <button onClick={() => ((showClear === 0) ? setShowClear(1) : setShowClear(0))}>
        Show Clear
      </button>
      {(showClear === 1)
        ? (
          <button onClick={() => {
            setCount(0);
          }}
          >
            Clear
          </button>
        ) : null}

      {/* !!(...) turns something into a boolean */}
      {!!(count % 2) && <h3>I am odd number</h3>}
    </section>
  );
};

// const App = () => {
//   // State, [a, setA] --> reloads all elements
//   const [count, setCount] = useState(0);
//
//   return (
//     <section>
//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}
//       >
//         Add + 1
//       </button>
//
//       {/* !!(...) turns something into a boolean */}
//       {!!(count % 2) && <h3>I am odd number</h3>}
//     </section>
//   );
// };

export default App;
