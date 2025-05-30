import React, { useState, createContext, useContext, memo } from 'react';

const context1 = createContext();

const NormalDiv = memo(() => {
    return <div>Component without using useContext</div>;
});

const CurrentCount = memo(() => {
    const { count } = useContext(context1);
    return <div>{count}</div>;
});

const Decrease = memo(() => {
    const { setCount } = useContext(context1);
    return (
        <div>
            <button onClick={() => setCount(c => c - 1)}>Decrease</button>
        </div>
    );
});

const Increase = memo(() => {
    const { setCount } = useContext(context1);
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Increase</button>
        </div>
    );
});

const Counter = memo(() => (
    <>
        <CurrentCount />
        <Decrease />
        <Increase />
        <NormalDiv />
    </>
));

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