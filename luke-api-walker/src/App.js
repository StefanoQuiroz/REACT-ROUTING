import React, { useState } from 'react';
import Menu from './components/Menu';
import './App.css';
import Input from './components/Input';
import fetchItems from './actions/fetchItems';
import Submit from './components/Submit';
import Results from './components/Results';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const [stateResults, setStateResults] = useState({
    name: "",
    datos: [],
  })

  //saber not found
  const [isFound, setIsFound] = useState(true);

  //onChange
  const onChange = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const data = {};
    for( const [key, value] of formData.entries()){
      data[key]=value;
    }
    //console.log(data)
    //{cat: "http://swapi.dev/api/species/", id: "2"}
    //console.log(data.cat + data.id);
    return (data.cat + data.id);
  }

  //onSubmit
  const onSubmit = async (e) => {
    try{
      e.preventDefault();
      const url = onChange(e);
      const arr = await fetchItems(url);
      const [[,name]] = arr;
      setStateResults({name, datos: arr.slice(1)});
      //slice(1) hasta el final
      //setIsFound(true);
    }
    catch{
      setIsFound(false);
    }
  }

  return (
    <div className="App">
      <form onChange={onChange} onSubmit={onSubmit}>
        <Menu/>
        <Input/>
        <Submit/>
        { isFound ? <Results {...stateResults}/> : <NotFound/>}
        <Router>
          <Switch>
            <Route path=":id">
              <Results/>
            </Route>
          </Switch>
        </Router>
        {/* todos los objetos restantes */}
      </form>
        
    </div>
  );
}

export default App;
