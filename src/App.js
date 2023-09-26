import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SchoolList from './components/SchoolList';
import SchoolDetails from './components/SchoolDetails';
import './App.css';

function App() {
  return (
    <>
      <h1>Metrics App - New York City High Schools</h1>
      <Home />
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/schools" exact component={SchoolList} />
          <Route path="/schools/:schoolId" component={SchoolDetails} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
