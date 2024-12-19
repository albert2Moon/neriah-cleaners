/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AboutHeader = () => {
  return (
    <>
    <div className="header-section">
        <div className="header-container">
            <div className="header-card1">
                
                <div className='header-title'>
                    <h1>About Neriah Cleaners</h1>
                    <p>We started with a simple mission: to provide unmatched cleaning services across East Africa with quality, trust, and professionalism at the forefront.</p>
                    </div>
                    <div className="header-values">
                            <div className="hv-1">
                                <p><i className="fa-regular fa-circle-check"></i> Satisfied Clientele</p>
                            </div>
                            <div className="hv-1">
                                <p><i className="fa-regular fa-circle-check"></i> Licensed & Certified</p>
                            </div>
                            <div className="hv-1">
                                <p><i className="fa-regular fa-circle-check"></i> Trusted Professionals</p>
                            </div>
                            <div className="hv-1">
                                <p><i className="fa-regular fa-circle-check"></i> Quality Services</p>
                            </div>
                        </div>
                <div className="header-cta-btns">
                    <button className="btn2"><a href="https://wa.me/+256767730511">Book now</a></button>
                    <button className="btn1"><Link to="/services">View Services </Link></button>
                </div>
            </div>
            <div className="header-card2 header-img">
                <img src={assets.img1} alt="" />
            </div>
        </div>
    </div>

</>
  )
}

export default AboutHeader
