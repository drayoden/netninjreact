import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The fuzzy blog</h1>
            <div className="links">
                {/* change achor '<a' tags to 'Link' and 'href' to 'to' to prevent requests going to the server */}
                <Link to="/">Home</Link>
                <Link to="/newblog">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;