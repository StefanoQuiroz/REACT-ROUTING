import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Page from './components/Page';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Page path=":variable"/>
        <Text path="/:text/:color/:backGroundColor"/>
      </Router>      
    </div>
  );
}

export default App;
