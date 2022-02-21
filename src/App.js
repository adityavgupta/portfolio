import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Resume from './pages/Resume';
import { HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    
    
    <HashRouter>
      <div className="App">
      <meta http-equiv='cache-control' content='no-cache'></meta>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education}/>
        <Route exact path="/resume" component={Resume}/>
        
      </Switch>
      
      </div>
    </HashRouter>
    
  );
}

export default App;
