import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SchoolList from './components/SchoolList';
import SchoolDetails from './components/SchoolDetails';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools" element={<SchoolList />} />
          <Route path="/schools/:schoolId" element={<SchoolDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
