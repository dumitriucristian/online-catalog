import React from 'react';
import Card from './components/Card.js';
import logo from './logo.svg';


function App() {

  return (

    <div className="App">
     
       <header className="grid grid-cols-1 sm:grid-cols-2">    
          <div className="bg-red-300">Logo</div>
          <div className="flex flex-wrap mr-5">
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link one</a>
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link two</a>
            <a className="w-full sm:w-1/3 text-center sm:text-right p-2" href="#">Link three</a>
          </div>     
      </header>
      <div className="flex w-full flex-wrap justify-center my-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
     
      
    </div>
  );
}

export default App;