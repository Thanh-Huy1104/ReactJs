import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-wrapepr'>
        <div className='left-about'>
            <h4>Information about me</h4>
            <p>
                I am familiar with multiple types of coding languages such as SQL,
                Java, Python, and JavaScript. I am also familiar with multiple
                types of frameworks such as React, Node.js, and Express. I am
                currently learning more about Neural Networks and Machine
                Learning. I am also familiar with multiple types of databases
                such as MySQL. I am also familiar with multiple types of
                operating systems such as Windows, Linux, and Mac OS. I am also
                familiar with multiple types of software such as Microsoft
                Office, Adobe Photoshop, Adobe Illustrator and Adobe Premiere Pro.
            </p>
        <div/>
          <div className='right-about'>
            <div className='HTML'></div>
            <div className='CSS'></div>
            <div className='SQL'></div>
            <div className='JavaScript'></div>
          </div>
        </div>
    </div>
  )
}

export default About