import React from 'react'
import './NavBar.css'
import { Logo } from '../../assets/svg';

const NavBar = () => {
  return (
    <div className='nav-wrapper'>
        <a href='./'><img src={Logo} alt='reload page' className='logo'></img></a>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><a href='#about' className='nav__link'>About</a></li>
                <li className='nav__item'><a href='#experience' className='nav__link'>Experience</a></li>
                <li className='nav__item'><a href='#contact' className='nav__link'>Contact</a></li>
            </ul>
        </nav>
  </div>
  )
}

export default NavBar