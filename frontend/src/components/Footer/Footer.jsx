/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">

                    <div className="footer-divider"></div>

                    <div className="footer-container-card">
                        <div className="footer-cards fc1">
                            <div className="footer-logo">
                                <img src={assets.logo2} alt="" />
                            </div>
                            <p>At Neriah Cleaning Company, we deliver reliable, detailed cleaning services with a commitment to your satisfaction. You won’t be disappointed!</p>
                            <div className="footer-email-phone">
                                <div>
                                    <i className='fa solid fa-phone'></i>
                                    <a href="tel:+256767730511">+256 767730511</a>
                                </div>
                                <div>
                                    <i className='fa solid fa-envelope'></i>
                                    <a href="mailto:">info@neriahcleaners.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-cards fc2">
                            <h2>Quick Links</h2>

                            <div className="footer-card-divider"></div>

                            <ul className='footer-quick-links'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/services'>Services</Link>
                                </li>
                                <li>
                                    <Link to='/faqs'>FAQs</Link>
                                </li>
                                <li>
                                    <Link to='/contact-us'>Contact</Link>
                                </li>
                            </ul>


                        </div>
                        <div className="footer-cards fc3">
                            <h2>Our Services</h2>

                            <div className="footer-card-divider"></div>

                            <ul className='footer-our-services'>
                                <li>
                                    <a href="#">House Cleaning</a>
                                </li>
                                <li>
                                    <a href="#">Office Cleaning</a>
                                </li>
                                <li>
                                    <a href="#">After Party Cleaning</a>
                                </li>
                                <li>
                                    <a href="#">Moving in/Out cleaning</a>
                                </li>
                                <li>
                                    <a href="#">Window Cleaning</a>
                                </li>
                                <li>
                                    <a href="#">Carpet Cleaning</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-cards fc4">
                            <button className='btn2'>
                                <a href="https://wa.me/+256767730511">Book now</a>
                            </button>
                            <button className='btn1 footer-btn1'>
                                <a href="">Apply for Job</a>
                            </button>
                            <div className="footer-social-links">
                                <div>
                                    <h2>Our Socials</h2>

                                    <div className="footer-card-divider"></div>

                                </div>
                                <div>
                                    <a href="https://wa.me/+256767730511">
                                        <i className='fa-brands fa-whatsapp'></i>
                                    </a>
                                    <a href="#">
                                        <i className='fa-brands fa-instagram'></i>
                                    </a>
                                    <a href="#">
                                        <i className='fa-brands fa-facebook'></i>
                                    </a>
                                    <a href="#">
                                        <i className='fa brand fa-linkedin'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p>&copy; Neriah Cleaner 2024 All rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
