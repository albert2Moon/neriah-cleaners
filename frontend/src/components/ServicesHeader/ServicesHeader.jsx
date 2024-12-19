/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ServicesHeader = () => {
    return (
        <>
            <div className="header-section">
                <div className="header-container">
                    <div className="header-card1">

                        <div className='header-title'>
                            <h1>Explore Our Cleaning Services</h1>
                            <p>From residential cleaning to commercial solutions, we offer a wide range of services tailored to meet your needs.</p>
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
                            <button className="btn1"><Link to="/contact-us">Get in Touch</Link></button>
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

export default ServicesHeader
