import React from "react";
import mail from "../images/Mail.png";

function MainContent() {
    return(
        <div className="main">
            <h2>Etisha Garg</h2>
            <h3>Blockhain Developer || Web3 Developer Evangelist</h3>
            <button className = "button">
                    <img src={mail} alt= "mail logo"/>
                    <span>Email</span>
            </button>
            <div className= "about">
                <h4>About</h4>
                <p>I’m a web3 enthusiast. I’m a strong believer in consistent learning, sharing, and building products. I love creating value, be it through the educational videos I create on youtube or the podcast I do with the people in web3 space.</p>
                <h4>Interests</h4>
                <p>Content creation. Reader. Internet fanatic. Travel geek. Networking</p>
            </div>
        </div>
    )
}

export default MainContent;