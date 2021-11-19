import {useState} from 'react';

const useCounter = (initialState: number = 0) => {
    const [counter, setCounter] = useState<number>(initialState);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const decrementCounter = () => {
        setCounter(counter - 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return {
        counter,
        setCounter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
};
export default useCounter;