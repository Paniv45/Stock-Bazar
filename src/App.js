// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';  // Corrected the import path
import share1 from './components/share1';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/share1' component={share1}/>
        <Route path='/Nav' component={Nav}/>
        <Route path='/Footer' component={Footer}/>
        <Route path="/share1/:id" component={share1} />
        <Route path="/Stock-Bazar" component={Main} exact />
        
      </Switch>
    </Router>
  );
}

export default App;
