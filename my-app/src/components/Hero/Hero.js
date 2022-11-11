import React from "react";
import './Hero.css';
import { Computer } from '../../assets/svg';


class Hero extends React.Component{
  render() {
    return (
    <div className="hero-wrapper">
      <div className="hero-text">
        <h1>Hi, my name is</h1>
        <h2 className='gradient-text'>Thanh-Huy.</h2>
        <h3>I'm an aspiring software engineer</h3>
        <p>I'm currently a student in university studying to become a future software <br />engineer. In addition, I'm passionate about learning new things and I'm <br /> always looking for new opportunities to learn and grow. Furthermore, I <br /> believe that making software more accessible is a key aspect to lead <br /> us to a better future.</p>
      </div>
      <div className="hero-image">
      <img src={Computer} alt='computer img'></img>
      </div>
    </div>
    )
  };
};

export default Hero;