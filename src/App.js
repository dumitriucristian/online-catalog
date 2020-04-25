import React from 'react';
import logo from './svg/book.svg';
import { BrowserRouter, Route} from "react-router-dom";
import Classes from './components/school/Classes.js';
import Students from './components/school/Students.js';
import Home from './components/school/Home.js';
import Cards from './components/Cards.js';
import Login from "./components/Login";
import MainMenu from "./components/MainMenu.js";


function App() {

  return (
    <div>
       <BrowserRouter>
          <header className="grid grid-cols-1 sm:grid-cols-2">    
            <div className="flex align-middle"><img src={logo} className="h-12 p-1"></img>Bucharest Hi School
            </div>
              <MainMenu />
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