import { Link } from "react-router-dom"
import"./AboutContentStyles.css"
import React from 'react'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>Who Am I?</h1>
<p>I'm Front-End Developer, a passionate Web Developer with a keen interest in Web Development. My work reflects a blend of creativity and technical expertise, showcased through projects. 

I thrive on challenges and constantly seek ways to push the boundaries. I bring a commitment to excellence and a proactive approach to every project. 
</p><p>
Let's collaborate and create something exceptional together.
</p>
<Link to="/contact">
    <button className="btn">Contact</button>
</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2}className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent