import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import 'animate.css';

const MultipleCustomHooks = () => {
    const {counter, incrementCounter} = useCounter(1);
    const {data, error, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // @ts-ignore
    const {quote, author} = !!data && data[0];
    return (
        <div className='mx-5 my-5'>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                    ?
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                    :
                    <blockquote className='blockquote text-right animate__animated animate__fadeIn'>
                        <p className="mb-2">
                            {
                                quote
                            }
                        </p>
                        <footer className="blockquote-footer">
                            {
                                author
                            }
                        </footer>
                    </blockquote>
            }


            <button className='btn btn-primary' onClick={incrementCounter}>
                Next quote
            </button>

        </div>
    );
};

export default MultipleCustomHooks;
