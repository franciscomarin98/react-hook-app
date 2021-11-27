import React, {useCallback, useState} from 'react'
import Hijo from './Hijo'

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        (num: number) => {
            setValor(v => v + num)
        }, [setValor]);


    return (
        <div className={'container my-5'}>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr/>

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
