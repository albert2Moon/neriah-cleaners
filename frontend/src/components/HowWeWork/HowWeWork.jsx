/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './HowWeWork.css'
import { assets } from '../../assets/assets'

const HowWeWork = () => {
    return (
        <>
            <div className="hww-section">
                <div className="hww-container">
                    <div className="section-title">
                        <div className="st1"></div>
                        <div className="st2">
                            <h5>HOW WE WORK</h5>
                        </div>
                        <div className="st3"></div>
                    </div>
                    <h1>How 'Neriah Cleaners' Works</h1>
                    <div className="hww-card-container">
                        <div className="hww-card">
                            <div className="hww-card-img">
                            <div className="hww-card-badge"><p>1</p></div>
                            <img src={assets.hww1} alt="" />
                            </div>
                            <div className="hww-card-body">
                                <h3>Book Online</h3>
                                <p>Choose your service, pick a date, and book online in minutes.</p>
                            </div>
                        </div>
                        <div className="hww-filler">
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                        <div className="hww-card">
                            <div className="hww-card-img">
                                <div className="hww-card-badge"><p>2</p></div>
                                <img src={assets.hww2} alt="" />
                            </div>
                            <div className="hww-card-body">
                                <h3>We Clean</h3>
                                <p>Our experts arrive and thoroughly clean, ensuring your satisfaction.</p>
                            </div>
                        </div>
                        <div className="hww-filler">
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                        <div className="hww-card">
                            <div className="hww-card-img">
                                <div className="hww-card-badge"><p>3</p></div>
                                <img src={assets.hww3} alt="" />
                            </div>
                            <div className="hww-card-body">
                                <h3>You Relax</h3>
                                <p>Sit back and enjoy a spotless home while we handle everything.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowWeWork
