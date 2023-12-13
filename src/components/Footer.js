import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                      
                        <p>Mysuru, Karnataka, India.</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+918296160881
</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <a href="mailto:likithnirvan08@gmail.com">likithnirvan08@gmail.com</a>
</h4>
                </div>
            </div>

            <div className="right">
                <h4>About</h4>
                <p>It's is me Likith Nirvan. I enjoy learning new things, doing projects and challenges.
</p>
                <div className="social">
                
<a href="https://www.facebook.com/likithnirvan.lucky" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                </a>         

                <a href="https://twitter.com/LNirvsn" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>

<a href="https://www.linkedin.com/in/likithnirvan?trk=contact-info" target="_blank" rel="noopener noreferrer">
<FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer