import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    
    
    <Router>
      <div className="App">
      
      <Navbar/>
      <Switch>
        <Route exact path="/portfolio/" component={Home} />
        <Route  path="/about" component={About} />
        <Route path="/education" component={Education}/>
        <Route path="/resume" component={Resume}/>
        
      </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
