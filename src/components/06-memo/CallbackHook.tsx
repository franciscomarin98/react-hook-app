import React, {useCallback, useState} from 'react';
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
        const [counter, setCounter] = useState(0);

        const increment = useCallback((n: number) => {
            setCounter(c => c + n);
        }, [setCounter]);

        return (
            <div className={'container my-4'}>
                <h1>useCallBack Hook {counter}</h1>
                <hr/>
                <ShowIncrement increment={increment}/>
            </div>
        );
    }
;

export default CallbackHook;