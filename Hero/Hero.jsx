import React from 'react'
import './Hero.css';
import Hand_icon from '../assets/hand_icon.png';
import Arrow from '../assets/arrow.png'
import gril from '../assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={Hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest collection</div>
                    <img src={Arrow} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={gril} alt="" />
            </div>
        </div>
    )
}

export default Hero
