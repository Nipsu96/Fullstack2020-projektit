import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tentit from './components/Tests';
import ChangeTests from './components/Modify';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li><Link to="/tests" className="active" >Tentit</Link></li>
          <li><Link to="about">Tietoa sovelluksesta</Link></li>
          <li><Link to="/admin">Muokkaa/poista/lisää</Link></li>
        </ul>
      </header>
      <Switch>
      <Route path="/tests">
            <Tentit/>
          </Route>
          <Route path="/admin">
            <ChangeTests/>
          </Route>
        </Switch>
    </div></Router>
  );
}
export default App;

