import React from "react";
import './TopSite.css';


class TopSite extends React.Component{
  render() {
    return (
    <div className="wrapper">
        <h1 className="typing-demo">Hi, my name is Thanh-Huy</h1>
        <div className="Top">
            <h2>Hi friends!</h2>
            <p className="Top p">I'm a student at ETS wanting to try coding with various <br></br>coding
              languages such as JavaScript, Python and SQL. <br></br>Currently, I'm
              focused on designing this very website. 
            </p>
        </div>
    </div>
    )
  };
};

export default TopSite;