import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Cardcast from './components/Cardcast';

function App() {
  return (<>
    <Navbar/>
    <Welcome/>
    <Cardcast/>
    </>
  );
}

export default App;