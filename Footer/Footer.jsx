import React from "react";
import './Footer.css'
import Shop_footer from '../assets/logo_big.png'
import Insta from '../assets/instagram_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
const Footer=()=>{

    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={Shop_footer} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={Insta} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
                {/* <div className="footer-icon-container">
                    <img src={Twitter} alt="" />
                </div> */}
            </div>
            <div className="footer-copyright">
                <hr/>
                <p> Copyright @ 2023 - All Right Reservad.</p>
            </div>

        </div>

    )
}
export default Footer;