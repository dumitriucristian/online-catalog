import React from 'react';
import logo from './logo.svg';


function App() {
  return (
    <div className="App" >
       <header className="grid grid-cols-1 sm:grid-cols-2">    
          <div className="bg-red-300">Logo</div>
          <div className="flex flex-wrap mr-5">
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link one</a>
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link two</a>
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link three</a>
          </div>     
      </header>
      <div className="card max-w-sm">
        <img className="w-full" src="https://picsum.photos/500"></img>
        <div >
            <tittle>Some title</tittle>
            <p>Lorem ipsume asdfasdf asdlkfjalsd flaksjdf lasdfk jl</p>
        </div>
        <div >
            <span className="bg-gray-200"></span>
        </div>
      </div>
    </div>
  );
}

export default App;