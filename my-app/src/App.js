import './App.css';
import TopSite from './components/TopSite/TopSite';
import FootSite from './components/FootSite/FootSite';
import reload from './components/svgs/Logo.svg'
import React from 'react';

function App() {
  return (
    <div>
      <header className='heading'>
      <a href='./'><img src={reload} alt='reloading page' className='logo'></img></a>
      </header>
      <TopSite></TopSite>
      <FootSite></FootSite>
    </div>
  );
};

console.log("Testing is working!")

export default App;
