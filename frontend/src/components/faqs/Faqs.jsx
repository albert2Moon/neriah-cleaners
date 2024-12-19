/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Faqs.css'
import {faqs} from '../../assets/assets'

const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    

    return (
        <>
            <div className="faqs-section" id='faqs'>
                <div className="faqs-container">

                    <div className="section-title">
                        <div className="st1"></div>
                        <div className="st2">
                            <h5>FAQs</h5>
                        </div>
                        <div className="st3"></div>
                    </div>

                    <div className="wcu-cb-title">
                        <h3>Frequently Asked Questions</h3>
                    </div>
                    <div className="wcu-cb-body">

                        {faqs.map((faq, index) => (
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
                                        <div dangerouslySetInnerHTML={{__html: faq.answer}}/>
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

export default Faqs
