/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './AboutUS.css'
import { assets } from '../../assets/assets'
import { useLocation } from 'react-router-dom';

const AboutUS = () => {

   

    return (
        <>
            <div className="about-us-section" id='about-us'>
                <div className="about-container">
                    <div className="about-img">
                        <img src={assets.img1} alt="" />
                    </div>
                    <div className="about-card2">
                        <div className="section-title">
                            <div className="st1"></div>
                            <div className="st2">
                                <h5>ABOUT US</h5>
                            </div>
                            <div className="st3"></div>
                        </div>
                        <h1>We are Different in the Cleaning Industry</h1>
                        <div className="abt-paragraph">
                            <p>Neriah Cleaning Services aims to be the leading cleaning provider in East Africa, offering reliable and professional services to homes and businesses in Kampala, Mpigi, Mukono, and Wakiso. We take pride in delivering high-quality, eco-friendly cleaning solutions.</p>
                        </div>
                        <div className="abt-paragraph">
                            <p>Our team is dedicated to providing efficient and budget-friendly services. We offer flexible options, including one-time cleanings, as well as weekly, monthly, and annual contracts, all while using biodegradable products to protect the environment.</p>
                        </div>

                        <div className="about-values">
                            <div className="av-1">
                                <p><i className="fa-regular fa-circle-check"></i> Cost Effective</p>
                            </div>
                            <div className="av-1">
                                <p><i className="fa-regular fa-circle-check"></i> Insured and Bonded</p>
                            </div>
                            <div className="av-1">
                                <p><i className="fa-regular fa-circle-check"></i> 100% Satisfaction</p>
                            </div>
                            <div className="av-1">
                                <p><i className="fa-regular fa-circle-check"></i> Quality Services</p>
                            </div>
                        </div>

                        <div className="about-button">
                            <button className='btn1'> <a href="tel:+256767730511"><i className="fa-solid fa-phone"></i> Call Us</a></button>
                            <button className='btn2'><a href="https://wa.me/+256767730511">Book now</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS
