//import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
function App() {
  return (
    <div className="App">
      <Router>
        <Component1 path="/route-1"/>
        <Component2 path="/route-2"/>
      </Router>

    </div>
  );
}

export default App;
