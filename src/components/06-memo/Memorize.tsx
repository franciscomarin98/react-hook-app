import {useState} from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

    const {counter, incrementCounter} = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <div className='mx-5 my-5'>
            <h1>Counter Memorize: <Small counter={counter}/></h1>
            <hr/>

            <button
                className='btn btn-primary mx-1'
                onClick={incrementCounter}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary mx-1'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    );
};

export default Memorize;
