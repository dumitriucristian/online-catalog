import React, {useState, useContext, useEffect} from 'react';
import { store } from "./store";
import logo from './svg/book.svg';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Classes from './components/school/Classes.js';
import Students from './components/school/Students.js';
import Home from './components/school/Home.js';
import Cards from './components/Cards.js';
import Login from "./components/Login";


function App() {

    const globalState =  useContext(store);
    const login = globalState.state.login;
    console.log(globalState);
    const message = (login) ? "Welcome user" : "You are not loged in";

  return (
    <div>
        <p>{message}</p>
       <BrowserRouter>
          <header className="grid grid-cols-1 sm:grid-cols-2">    
            <div className="flex align-middle"><img src={logo} className="h-12 p-1"></img>Bucharest Hi School
            </div>
              <div className="flex flex-wrap mr-5">
                <NavLink to="/"   className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#" >Home</NavLink>
                <NavLink to="/classes"   className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#" >Classes </NavLink>
                <NavLink to="/students" className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#">Students</NavLink>
                <NavLink to="/statistics" className="w-full sm:w-1/4 text-center sm:text-right p-2" href="#">Statistics</NavLink>

                      <NavLink to="/logout" className="w-full sm:w-1/4 text-center sm:text-right bg-black text-white p-2" href="#">Logout</NavLink>

                      <NavLink to="/login" className="w-full sm:w-1/4 text-center sm:text-center bg-white rounded text-center p-2" href="#">Login</NavLink>

              </div>               
          </header>


          <div className="flex w-full flex-wrap justify-center my-10">

            <Route exact path="/" component={Home} />
            <Route path="/classes" component={Classes} /> 
            <Route path="/students" component={Students} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;