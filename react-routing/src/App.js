//import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
//import Component1 from './components/Component1';
//import Component2 from './components/Component2';
import ListOfDogsComponent from './components/ListOfDogsComponent';
import DetailDogComponent from './components/DetailDogComponent'
function App() {
  //const id= 5;
  return (
    <div className="App">
      <Router>
        {/* <Component1 path="/route-1"/>
        <Component2 path="/route-2"/> */}
        <ListOfDogsComponent path="/dogs"/>
        {/* Los parametros de la url se transmitiran como accesorios a nuestro componente */}
        {/* <DetailDogComponent path={`/dogs/:${id}`}/> */}
        <DetailDogComponent path="/dogs/:id"/>
      </Router>

    </div>
  );
}

export default App;
