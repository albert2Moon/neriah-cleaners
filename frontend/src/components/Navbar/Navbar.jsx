/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation(); // Get the current URL path

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsClicked(false);
    };

    const isActive = (path) => {
        const exactMatch = location.pathname === path;
        const startsWithMatch = location.pathname.startsWith(path);

        if (exactMatch) {
            return 'active-link';
        }

        if (startsWithMatch && path !== '/') {
            return 'active-link';
        }

        return '';
    };

    return (
        <div className="navbar-card">
            <div className="logo">
                <Link to='/'>
                    <img src={assets.logo1} alt="" />
                </Link>
            </div>
            <div className="menu-list">
                <ul className={`menu ${isClicked ? 'clicked' : ''}`}>
                    <li>
                        <Link to='/' className={isActive('/')} onClick={closeMenu}>Home</Link>
                        <div className={`active-line ${isActive('/') ? 'active' : ''}`}></div>
                    </li>
                    <li>
                        <Link to='/about' className={isActive('/about')} onClick={closeMenu}>About</Link>
                        <div className={`active-line ${isActive('/about') ? 'active' : ''}`}></div>
                    </li>
                    <li>
                        <Link to='/services' className={isActive('/services')} onClick={closeMenu}>Services</Link>
                        <div className={`active-line ${isActive('/services') ? 'active' : ''}`}></div>
                    </li>
                    <li>
                        <Link to='/faqs' className={isActive('/faqs')} onClick={closeMenu}>FAQs</Link>
                        <div className={`active-line ${isActive('/faqs') ? 'active' : ''}`}></div>
                    </li>
                    <li>
                        <Link to='/contact-us' className={isActive('/contact-us')} onClick={closeMenu}>Contact</Link>
                        <div className={`active-line ${isActive('/contact-us') ? 'active' : ''}`}></div>
                    </li>
                </ul>
            </div>
            <div className="cta-btns">
                <button className='btn1'>
                    <a href="tel:+256767730511"><i className="fa-solid fa-phone"></i> Call Us</a>
                </button>

                <button className='btn2'>
                    <a href="https://wa.me/+256767730511">Book now</a>
                </button>
            </div>
        </div>
    )
}

export default Navbar
