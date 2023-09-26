import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SchoolList from './components/SchoolList';
import SchoolDetails from './components/SchoolDetails';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schools" exact component={SchoolList} />
          <Route path="/schools/:schoolId" component={SchoolDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
