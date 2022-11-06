import './App.css';
import React from 'react';
import TopSite from './components/TopSite/TopSite';
import FootSite from './components/FootSite/FootSite';
import reload from './components/svgs/Logo.svg'


import Linkedin from './components/svgs/Linkedin.svg'
import Discord from './components/svgs/Discord.svg'
import Github from './components/svgs/GitHub.svg'



function App() {
  return (
    <body>
      <header className='nav-wrapper'>
        <a href='./'><img src={reload} alt='reload page' className='logo'></img></a>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'><a href='./' className='nav__link'>About</a></li>
          <li className='nav__item'><a href='./about' className='nav__link'>Experience</a></li>
          <li className='nav__item'><a href='./contact' className='nav__link'>Contact</a></li>
        </ul>
      </nav>
      </header>
      <div>
        <ul className='left-list'>
          <li>
            <a href='https://www.linkedin.com/in/thanh-huy-nguyen-703606220/'><img src={Linkedin} alt='link to my linkedin' ></img></a>
          </li>
          <li>
            <a href='https://discordapp.com/users/274340204939313153'><img src={Discord} alt='link to my discord' ></img></a>
          </li>
          <li>
            <a href='https://github.com/Thanh-Huy1104'><img src={Github} alt='link to my github'></img></a>
          </li>
        </ul>
      </div>
      <div>
        <TopSite></TopSite>
      </div>
    <footer>
      <FootSite></FootSite>
    </footer>
    </body>
  );
};

console.log("Testing is working!")

export default App;

