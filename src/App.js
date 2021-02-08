// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './4o4';


function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          {/* All routes are now placed inside the 'Switch' component */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newblog">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> 
          </Switch>

        </div>
      </div>
    </Router>
  );
}


export default App; // always export so it can be used 'imported' into other files.
