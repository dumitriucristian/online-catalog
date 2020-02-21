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
      <div className="card w-64 rounded-lg overflow-hidden">
          <img className="h-40 w-full object-cover" src="https://picsum.photos/500"></img>
        <div >
            <h3 className="text-center font-medium uppercase p-1 bg-gray-300">Some title</h3>
            <p className="p-2">Lorem ipsume asdfasdf asdlkfjalsd flaksjdf lasdfk jl</p>
        </div>
        <div className="flex">
            <span className="tag text-gray-400">Tag</span>
            <span className="tag">Tag</span>
            <span className="tag">Tag</span> 
        </div>
      </div>
    </div>
  );
}

export default App;