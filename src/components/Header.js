import React from "react";
import myImage from "../images/etisha.jpg"

function Header() {
    return(
        <div className="header">
            <img src={myImage}/>
        </div>
    )
}

export default Header;