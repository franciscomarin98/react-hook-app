import {useMemo, useState} from "react";
import {procesoPesado} from "../../helpers/procesos";
import useCounter from "../../hooks/useCounter";

const MemoHook = () => {

    const {counter, incrementCounter} = useCounter(0);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div className='mx-5 my-5'>
            <h1>MemoHook</h1>
            <h3>Counter Memorize: <small>{counter}</small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

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

export default MemoHook;
