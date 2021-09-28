import React from "react";
import './Footer.css';


function Footer(){
    return(
        <div className='footer-div'> 
            <p className="p2">CONNECT US </p>
            <img src={require("./images/share.png").default} alt='iamges' className='image_share' />
        </div>
    )
}


export default Footer