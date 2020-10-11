import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Project from './components/Project';

function App() {
  return (<>
    <Navbar/>
    <Welcome/>
    <Profile/>
    <Project/>
    </>
  );
}

export default App;