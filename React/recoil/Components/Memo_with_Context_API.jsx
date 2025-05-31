// Why You Don't Need memo in Your Code
// Context Granularity Is Fine

// You're using useContext(context1) only in the specific components that need it 
// (CurrentCount, Increase, Decrease).

// Those components will re-render only when the context value (count, setCount) changes — 
// which is expected.

// Other Components Like NormalDiv Don't Use Context

// NormalDiv does not use useContext, and it won’t re-render when context changes, unless its 
// parent (Counter) re-renders.

// Counter Also Doesn’t Use Context

// So, Counter itself won’t re-render unless its parent re-renders.

// In your structure, the parent of Counter is ContextProvider, but ContextProvider isn’t 
// changing its own props or state, only passing a context value.

// React Batches Renders of Context Consumers

// When you update context, only the consumers that read the changed context values will 
// re-render — others won’t.


// 🔍 When Would You Need memo?
// You might want React.memo if:

// You pass props (not context) to a component, and those props are unchanged across renders.

// You want to skip re-renders for performance reasons (especially if a component is heavy to 
// render).

// You pass a component as a child (<SomeComponent />) and you want to avoid unnecessary 
// re-renders due to reference equality issues.

// Use useCallback(fn, [deps]) to memoize a function when:
//You’re passing a function as a prop to a memoized child component.

//** Only text at Current Div will be logged becayse it only uses context 
import React, { useState, createContext, useContext} from 'react';

const context1 = createContext();

const NormalDiv = () => {
    console.log("NORMAL DIV RE-RENDERED AT: " + new Date().toLocaleTimeString());
    return <div>Component without using useContext</div>;
};

const CurrentCount = () => {
    console.log("CURRENT COUNT RE-RENDERED AT: " + new Date().toLocaleTimeString());
    const { count } = useContext(context1);
    return <div>{count}</div>;
};

const Decrease = () => {
    const { setCount } = useContext(context1);
    return (
        <div>
            <button onClick={() => setCount(c => c - 1)}>Decrease</button>
        </div>
    );
};

const Increase =() => {
    const { setCount } = useContext(context1);
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Increase</button>
        </div>
    );
};

const Counter = () => {
    console.log("COUNTER COMPONENT RE-RENDERED AT: " + new Date().toLocaleTimeString());

    return (<>
        <CurrentCount />
        <Decrease />
        <Increase />
        <NormalDiv />
    </>)
};

function ContextProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
        <context1.Provider value={{ count, setCount }}>
            {children}
        </context1.Provider>
    );
}

function APP() {
    return (
        <ContextProvider>
            <Counter />
        </ContextProvider>
    );
}

export default APP;