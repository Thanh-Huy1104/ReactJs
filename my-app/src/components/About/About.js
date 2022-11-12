import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
    <div>
        <h1>About Me</h1>
    </div>
    <div className='about-container'>
        <div className='left-about'>
            <h4>Information about me</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet
                nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl
                nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam
                nunc nisl eu lectus. Sed euismod, nisl nec aliquam aliquam,
                nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.
            </p>
        <div/>
        <div className='right-about'></div>
        </div>
    </div>
    </div>
  )
}

export default About