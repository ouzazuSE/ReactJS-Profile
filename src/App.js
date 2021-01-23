import './App.css';
import Navbar from './Components/Navbar';

//Contents
import Home from './Contents/Home'
import About from './Contents/About'
import Education from './Contents/Education';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar />
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
