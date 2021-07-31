import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    
    
    <Router>
      <div className="App">
      
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} /> 
      </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
