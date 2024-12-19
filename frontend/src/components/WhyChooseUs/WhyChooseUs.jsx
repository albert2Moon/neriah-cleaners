
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './WhyChooseUs.css'
import { assets, faqs } from '../../assets/assets'
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {

    // const [isClicked, setIsClicked] = useState(false);

    // const handleClick = () => {
    //     setIsClicked(prev => !prev); // Toggles between true and false
    // }

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className="wcu-section">
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
                        <p className='wcu-paragraph'>At our cleaning service, we prioritize your health and safety, with a team led by a board-certified Medical Doctor experienced in Infection Prevention Control (IPC). Our professional, well-trained staff undergo thorough background checks, ensuring you receive ....</p>


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
                            <button className='btn1'>
                                <Link to="/about#Why-Choose-Us"> Read more <i className='fa-solid fa-arrow-right-long'></i></Link>
                            </button>
                            <button className='btn2'><a href="https://wa.me/+256767730511">Book Now</a></button>
                        </div>
                    </div>
                    <div className="wcu-card wcu-img">
                        <img src={assets.img1} alt="" />
                    </div>
                </div>
                <div className="wcu-container-bottom">
                    <div className="wcu-cb-title">
                        <h3>Frequently Asked Questions</h3>
                        <button className='btn5'><Link to="/faqs#faqs">View All <i className='fa-solid fa-arrow-right-long'></i></Link></button>
                    </div>
                    <div className="wcu-cb-body">

                        {faqs.slice(0, 6).map((faq, index) => (
                            <div
                                key={index}
                                className={`wcu-faq-card  ${activeIndex === index ? 'expanded' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="wcu-faq-title">
                                    <div><h4>{faq.question}</h4></div>
                                    <div className="wcu-faq-icon">
                                        <i className={`fa-solid fa-${activeIndex === index ? 'xmark' : 'plus'}`}></i>
                                    </div>
                                </div>
                                {activeIndex === index && (
                                    <div className="wcu-faq-content">
                                        {/* Renders the `faq.answer` content as HTML */}
                                        <div className="wcu-faq-paragraph" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs
