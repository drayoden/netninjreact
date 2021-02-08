import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3001/blogs/' + id)
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:3001/blogs/' + blog.id , {
            method: 'DELETE',
        }).then(() => {
            console.log('blog post deleted...');
            // history.go(-1);   // goes back in browser history (back/forward buttons on browser)
            // history.go(1);   // goes forward in browser history (back/forward buttons on browser)
            history.push('/');   // goes to the route for the home page
        })    
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;