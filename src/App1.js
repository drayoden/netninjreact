// import logo from './logo.svg';
import './App.css';

function App() {

  const title = 'Welcome to the fuzzy blog';
  const likes = 50;
  const newleaf = 'http://newleafdesign.com';

  // 
  // cannot put booleans or objects into JSX
  // 
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        
        <p>{ 10 }</p>
        <p>{ 'hello fuzzies!'}</p>
        <p>{ Math.random() * 20 }</p>

        <a href={newleaf}>Visit newleaf...</a>
      </div>
    </div>
  );
}


export default App; // always export so it can be used 'imported' into other files.
