import React from "react";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import linkedin from "../images/linkedin.png";

function Footer() {
    return(
        <div className="footer">
            <a href="https://twitter.com/GargEtisha" target="_blank"><img src= {twitter} alt = "twitter logo"/></a>
            <a href="https://www.youtube.com/c/EtishaGarg" target="_blank"><img src= {youtube} alt = "youtube logo"/></a>
            <a href="https://www.linkedin.com/in/etisha-garg/" target="_blank"><img src= {linkedin} alt = "linkedin logo"/></a>
            <a href="https://github.com/EtishaGarg" target="_blank"><img src= {github} alt = "github logo"/></a>
        </div>
    )
}

export default Footer;