import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
    // const [blogs, setBlogs] = useState([
    //     { title: 'The rules of fuzzyness', body: 'lorem ipsum...', author: 'stormy', id: 1 },
    //     { title: 'Wisker Whistling', body: 'lorem ipsum...', author: 'forrest', id: 2 },
    //     { title: 'Fabulous Fuzzyness!', body: 'lorem ipsum...', author: 'stormy', id: 3 }
    // ]);

    // new useState for fetching db.json data inside useEffect...
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const [name, setName] = useState('stormy'); 

    // removed to replace with the actual db.json delete functionality
    // const handleDetele = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        // console.log('useEffect: ' + name)
        // setTimeout simulates a large db to display 'Loading' messgae.
        setTimeout(() => {
            fetch('http://localhost:3001/blogs')
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    // test this error by changing the fetch URL to somthing bogus
                    throw Error('could not fectch data from db.json...');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {  // catches any kind of network error
                setIsPending(false);
                setError(err.message);
            })
        }, 500); 
    // }, []); // empty dependency array - useEffect runs once
    // }, [name]); // now we watch for 'name' to change state - useEffect runs each time 'name' changes state
    }, []);
    
    
    return (
        <div className="home">

            {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDetele} />}\ */}
            
            {/* if there is an error, output to browser */}
            {error && <div>{ error }</div>}

            {/* another conditional like below -- isPending */}
            {isPending && <div>Loading...</div> }

            {/* note the '&&' conditional below -- 'blogs' is null initially also removed handleDelte -- see above */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            
            {/* <button onClick={() => setName('forrest')}>change name</button> */}
            {/* <p>{ name }</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'stormy' )} title="Stormy Blogs" /> */}
        </div>
    );
}
 
export default Home;