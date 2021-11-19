import './counter.css'
import useCounter from "../../hooks/useCounter";

const CounterApp = () => {

    const {counter, incrementCounter, decrementCounter, resetCounter} = useCounter(10)

    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr/>
            <button
                className={"btn btn-primary mx-2"}
                onClick={decrementCounter}>
                -1
            </button>
            <button
                className={"btn btn-primary mx-2"}
                onClick={resetCounter}>
                0
            </button>
            <button
                className={"btn btn-primary mx-2"}
                onClick={incrementCounter}>
                +1
            </button>
        </>
    )
        ;
};

export default CounterApp;
