import React from 'react';
import Card from './components/Card.js';
import logo from './logo.svg';
import { BrowserRouter, Router, Route, NavLink } from "react-router-dom";
import Classes from './components/school/Classes.js';
import Students from './components/school/Students.js';
import Home from './components/school/Home.js';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <header className="grid grid-cols-1 sm:grid-cols-2">    
            <div className="flex align-middle"><img className="h-10 m-2" src="https://picsum.photos/100"></img>Bucharest Hi School</div>
              <div className="flex flex-wrap mr-5">
                <NavLink to="/classes" className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#" >School Classes</NavLink>
                <NavLink to="/students" className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">School Students</NavLink>
                <NavLink to="/statistics" className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">School statistics</NavLink>
              </div>               
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/classes" component={Classes} />
          <Route path="/students" component={Students} />
          <div className="flex w-full flex-wrap justify-center my-10">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;