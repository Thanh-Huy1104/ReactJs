import React from 'react'
import './About.css'
import ProgressBar from 'react-bootstrap/ProgressBar';


const About = () => {
  const SQL = 'SQL and MySQL 80';
  const JavaScript = 'JavaScript 75';
  const ReactJS = 'React 70';
  const Python = 'Python 90';
  const C = 'C 85';
  const Adobe_Photoshop = 'Adobe Photoshop 80';
  const Adobe_Illustrator = 'Adobe Illustrator 80';
  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <div className='about-text'>
            <h2>About me</h2>
            <p>
                I am familiar with multiple types of coding languages such as SQL, Python, C and JavaScript. I am also familiar with multiple
                types of frameworks such as React, Node.js, and Express. I am
                currently learning more about Neural Networks and Machine
                Learning. I am also familiar with multiple types of databases
                such as MySQL. I am also familiar with multiple types of software such as Adobe Photoshop and Adobe Illustrator.
            </p>
        <div/>
          <div className='about'>
            <div className='SQL'>
            <ProgressBar now={SQL} label={`${SQL}%`} />
            </div>
            <div className='JavaScript'>
            <ProgressBar now={JavaScript} label={`${JavaScript}%`} />
            </div>
            <div className='Python'>
            <ProgressBar now={Python} label={`${Python}%`} />
            </div>
            <div className='React'>
            <ProgressBar now={ReactJS} label={`${ReactJS}%`} />
            </div>
            <div className='C'>
            <ProgressBar now={C} label={`${C}%`} />
            </div>
            <div className='Adobe Photoshop'>
            <ProgressBar now={Adobe_Photoshop} label={`${Adobe_Photoshop}%`} />
            </div>
            <div className='Adobe Illustrator'>
            <ProgressBar now={Adobe_Illustrator} label={`${Adobe_Illustrator}%`} />
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About