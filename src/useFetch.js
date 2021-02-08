// custom hooks in react have to be prefixed with 'use' or it will not work

import { useState, useEffect } from "react";

const useFetch = (url) => {

    // new useState for fetching db.json data inside useEffect...
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // this is used with the return after the setTimeout and the signal in 'fetch' 
        // and the catch to prevent the warning...
        const abortCont = new AbortController();
        
        
        // console.log('useEffect: ' + name)
        // setTimeout simulates a large db to display 'Loading' messgae.
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                // console.log(res);
                if(!res.ok) {
                    // test this error by changing the fetch URL to somthing bogus
                    throw Error('could not fectch data from db.json...');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {  // catches any kind of network error
                if (err.name === 'AbortError') {
                    console.log('fetch aborted...')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000); 

        // this prevents a warning about 'React state update' when you click on the home page and then immediatly click on
        // 'new blog' before 'loading...' timeout is reached: 
        return () => abortCont.abort();

    // }, []); // empty dependency array - useEffect runs once
    // }, [name]); // now we watch for 'name' to change state - useEffect runs each time 'name' changes state
    }, [url]);

    return {data, isPending, error}

}

export default useFetch; 