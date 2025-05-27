import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(current => current -1)}>Decrease</button>;
}

function Increase() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(current => current +1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App2 = () => {
  return <div>
    <Parent />
  </div>
};

export default App2;

// Why do Increase, Decrease, and Value all re-render?

// When you call setCount, the state in CountContextProvider changes.

// Any component that uses useContext(CountContext) will re-render when the context value changes.

// In your code, all three components (Increase, Decrease, Value) call useContext(CountContext),
// so all three re-render when count changes—even if a component only uses setCount and not count.

// It is NOT because props are being passed to each component.

// It is because any component that reads from a context will re-render when any value in that 
// context changes.

// How to optimize (if needed):
// If you want only Value to re-render when count changes, and not Increase/Decrease, you would 
// need to split your context (e.g., separate count and setCount into different contexts) or 
// use a custom context selector library.
//**************************************************************
// Can memoization pof function components help
// Memoization of function components (using React.memo) will NOT help in this case.

// Why?
// When the context value ({count, setCount}) changes, all components using 
// useContext(CountContext) will re-render, even if you wrap them in React.memo.

// React.memo only prevents re-renders when props do not change. But context changes are not 
// props—they force a re-render for all consumers.