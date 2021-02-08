import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oh No! Our fuzzyness distracted you an you went to a page that does not exist! We are so sorry!</h2>
            <p>Click<Link to='/'> here </Link>to go back</p>
        </div>
    );
}
 
export default NotFound;