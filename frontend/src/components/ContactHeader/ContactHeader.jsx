/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ContactHeader = () => {
  return (
    <>
    <div className="header-section">
        <div className="header-container">
            <div className="header-card1">

                <div className='header-title'>
                    <h1>Contact Neriah Cleaners</h1>
                    <p>Got questions or need to book a cleaning? Get in touch with us and we’ll be happy to assist you.</p>
                </div>
                <div className="header-values">
                    <div className="hv-1">
                        <p><i className="fa-regular fa-circle-check"></i> Highly Rated & Esteemed</p>
                    </div>
                    <div className="hv-1">
                        <p><i className="fa-regular fa-circle-check"></i> Insured and Bonded</p>
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
                    <button className="btn1"><Link to="/faqs">Asked Questions</Link></button>
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

export default ContactHeader
