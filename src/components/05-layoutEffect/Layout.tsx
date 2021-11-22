import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import 'animate.css';
import {useLayoutEffect, useRef, useState} from "react";

const Layout = () => {
    const [boxSize, setBoxSize] = useState({});
    const {counter, incrementCounter} = useCounter(1);
    const {data, error, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // @ts-ignore
    const {quote} = !!data && data[0];


    const pTag = useRef<HTMLParagraphElement>(null);


    useLayoutEffect(() => {
        if (pTag.current) {
            setBoxSize(pTag.current.getBoundingClientRect());
        }
    }, [quote])

    return (
        <div className='mx-5 my-5'>
            <h1>Layout Effect</h1>
            <hr/>

            {
                loading
                    ?
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                    :
                    <blockquote className='blockquote text-right animate__animated animate__fadeIn'>
                        <p style={{display: "inline"}} ref={pTag} className="mb-2">
                            {
                                quote
                            }
                        </p>
                    </blockquote>
            }

            <pre>
                {JSON.stringify(boxSize, null, 2)}
            </pre>

            <button className='btn btn-primary' onClick={incrementCounter}>
                Next quote
            </button>

        </div>
    );
};

export default Layout;
