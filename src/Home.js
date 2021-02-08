// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    // note 'data: blogs' -- since the JSX is already using 'blogs' this renames it for this instance.
    const { data: blogs, isPending, error } = useFetch('http://localhost:3001/blogs');

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