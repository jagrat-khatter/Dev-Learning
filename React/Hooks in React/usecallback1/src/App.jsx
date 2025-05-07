import { useState, memo, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Demo2 = memo(() => {
  console.log("ghf");
  return <div>This is Demo2</div>;
});

const Demo = memo(function({ a }) {
  console.log("Rendering");
  return <div>Hi there {a}</div>;
});

const Demo3 = memo(function({ funk }) {
  console.log("poi");
  funk();
});

function App() {
  const [count, setCount] = useState(0);

  const funk = useCallback(() => {
    return <>This is Demo3</>;
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{`counter ${count}`}</button>

      <Demo a={1} />   {/* pass directly primitive */}

      <Demo2 />

      <Demo3 funk={funk} />
    </>
  );
}

export default App;


//</> <Demo {...demoProps} />  is equiavlent to <Demo a={demoProps.a} /> 
// 1. React.memo
// What It Does:

// React.memo is a higher-order component (HOC) that memoizes a functional component.
// It prevents re-renders of the component unless its props change.
// Key Learning:

// Use React.memo to optimize components that receive props and do not need to re-render unless those props change.

// 2. useMemo
// What It Does:

// useMemo memoizes the result of a computation or value, ensuring that its reference remains stable across renders unless its dependencies change.
// Key Learning:

// Use useMemo to memoize variables or objects that are passed as props to child components.
// This prevents React from creating new references on every render, which could trigger unnecessary re-renders.

// 3. useCallback
// What It Does:

// useCallback memoizes a function, ensuring that its reference remains stable across renders unless its dependencies change.
// Key Learning:

// Use useCallback to memoize functions that are passed as props to child components.
// This prevents React.memo from detecting a new reference and triggering unnecessary re-renders.

// 4. Component Definition Placement
// What It Does:

// Components defined inside a parent component are re-created on every render of the parent.
// This can cause unnecessary re-renders, even if React.memo is used.
// Key Learning:

// Always define memoized components (e.g., Demo2) outside the parent component to prevent them from being re-created on every render.

// 5. Spread Operator in JSX
// What It Does:

// The spread operator ({...props}) is used to pass all properties of an object as individual props to a component.
// Key Learning:

// Use the spread operator to simplify passing multiple props to a component