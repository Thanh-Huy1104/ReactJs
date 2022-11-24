import React from 'react'
import './About.css'
import ProgressBar from '../ProgressBar/ProgressBar'

const About = () => {
  return (
      <div className='about-wrapper'>
        <div class="waves">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
      <div className='about-content'>
        <div className='about-text'>
            <h2>01. About me</h2>
            <p>
                Hello! My name is Thanh-Huy and I'm a university student currently trying to learn all sorts of technologies. I'm currently studying Software Engineering at the University of Technolgies Superieur in Montreal. I'm passionate about learning new technologies and applying them to solve real-world problems.<br/><br/>Here are a few of them that I've been working with recently:
            </p>
            <ul className='skill-list'>
                <li>JavaScript</li>
                <li>React & Vite</li>
                <li>Node.js</li>
                <li>C</li>
                <li>HTML & CSS, TailwindCSS</li>
                <li>MySQL & Firebase</li>
            </ul>
        <div/>
        </div>
      <div className='about-progress'>
        <h2>Main Skills</h2>
            <div>
            <h5>SQL</h5>
            <ProgressBar className='SQL'done="  90" />
            </div>
            <div>
            <h5>Python</h5>
            <ProgressBar className='Python' done="90" />
            </div>
            <div>
            <h5>Adobe Phtotshop & Illustrator</h5>
            <ProgressBar className='Adobe Photoshop' done="80" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default About