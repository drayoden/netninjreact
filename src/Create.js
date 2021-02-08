import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('stormy');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog post added...');
            setIsPending(false);
            // history.go(-1);   // goes back in browser history (back/forward buttons on browser)
            // history.go(1);   // goes forward in browser history (back/forward buttons on browser)
            history.push('/');   // goes to the route for the home page
        })
    }

    return ( 
        <div className="create">
            <h2>Add new blog post</h2>
            <form onSubmit={handleSubmit}>
                
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>Blog body:</label>
                <textarea 
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="stormy">stormy</option>
                    <option value="forrest">forrest</option>
                </select>     
                

                { !isPending && <button>Add blog post</button>}
                { isPending && <button disabled>Adding blog...</button>}

                {/* test states: */}
                {/* <p>title: { title }</p>
                <p>body: { body }</p>
                <p>author: { author }</p> */}

            </form>
        </div>
    );
}
 
export default Create;