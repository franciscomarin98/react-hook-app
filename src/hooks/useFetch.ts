import {useEffect, useState} from "react";

const useFetch = (url: string, options?: any) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setLoading(false);
                setData(data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();

    }, [url, options]);


    return {
        loading, data, error
    }
}


export default useFetch;