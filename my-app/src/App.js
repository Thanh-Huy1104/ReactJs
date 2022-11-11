import './App.css';
import React from 'react';
import { NavBar, Footer, Hero, Leftbar } from './components/index';


function App() {
  return (
    <div className=''>
      <div className=''>
        <div className=''>
        <NavBar />
        </div>
      </div>

    <div className=''>
      <div className=''>
        <Leftbar />
      </div>
    </div>

    <div className=''>
      <div className=''>
        <Hero />
      </div>
    </div>

    <div className=''>
      <div className=''>
        <Footer />
      </div>
    </div>
  </div>
  );
};

console.log("Testing is working!")



export default App;

