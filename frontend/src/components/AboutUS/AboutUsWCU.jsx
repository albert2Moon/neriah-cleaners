/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const AboutUsWCU = () => {


    return (
        <>
            <div className="wcu-section" id='Why-Choose-Us'>
                <div className="wcu-container">
                    <div className="wcu-card">
                        <div className="section-title">
                            <div className="st1"></div>
                            <div className="st2">
                                <h5>WHY CHOOSE US</h5>
                            </div>
                            <div className="st3"></div>
                        </div>
                        <h1>Your Happiness is Our Priority</h1>
                        <p className='wcu-paragraph'>At our cleaning service, we prioritize your health and safety, with a team led by a board-certified Medical Doctor experienced in Infection Prevention Control (IPC). Our professional, well-trained staff undergo thorough background checks, ensuring you receive reliable and top-quality service every time. </p>
                        <p className='wcu-paragraph'>
                        With a low turnover rate, you'll enjoy consistency by having the same cleaner for each visit unless you request otherwise. We also use environmentally friendly cleaning materials and supply all necessary equipment. Plus, booking and payment are made easy and instant with our online platform.
                        </p>

                        <div className="wcu-cb-card">
                            <div>
                                <img src={assets.tickIcon} alt="" />
                            </div>
                            <div>
                                <h4>Highly Rated & Esteemed</h4>
                                <p>Our services are consistently rated highly for quality and reliability.</p>
                            </div>
                        </div>
                        <div className="wcu-cb-card">
                            <div>
                                <img src={assets.tickIcon} alt="" />
                            </div>
                            <div>
                                <h4>Trusted Professionals</h4>
                                <p>Our trained and vetted staff ensure a dependable, top-notch service.</p>
                            </div>
                        </div>

                        <div className='wcu-cta-btns'>
                            <button className='btn2'><a href="https://wa.me/+256767730511">Book Now</a></button>
                        </div>
                    </div>
                    <div className="wcu-card wcu-img">
                        <img src={assets.img1} alt="" />
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default AboutUsWCU
