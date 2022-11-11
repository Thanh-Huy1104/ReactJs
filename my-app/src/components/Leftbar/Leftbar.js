import React from 'react'
import './Leftbar.css'
import { Discord, Github, Linkedin } from '../../assets/svg';

const Leftbar = () => {
  return (
    <div>
      <ul className='left-list'>
        <li> 
        <a href='https://www.linkedin.com/in/thanh-huy-nguyen-703606220/'><img src={Linkedin} alt='link to my linkedin'></img></a>
        </li>
        <li>
          <a href='https://discordapp.com/users/274340204939313153'><img src={Discord} alt='link to my discord' ></img></a>
        </li>
        <li>
          <a href='https://github.com/Thanh-Huy1104'><img src={Github} alt='link to my github'></img></a>
        </li>
      </ul>
    </div>
  )
}

export default Leftbar