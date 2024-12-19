/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Quote.css'
import { assets } from '../../assets/assets';

const Quote = () => {

    const handleDownload = () => {
        //Path to the file(Public Folder --recommended)
        const fileUrl = '/cleaning_services_quote.pdf';

        //Create an anchor template to trigger the template
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cleaning_services_quote.pdf';

        document.body.appendChild(link);
        link.click();

        //cleanup the anchor element after download
        document.body.removeChild(link);
    }


    return (
        <>
            <div className='quote-container'>
                <div className="quote-bg">
                    {/* <img src={assets.quotebg} alt="" /> */}
                </div>
                <div className="quote-overlay"></div>
                <div className="quote-cards qC1">
                    <h1>Get Your place cleaned <br />It's simple and affordabe</h1>
                    <p>We offer flexible, budget-friendly cleaning packages tailored to your space and needs. Get in touch for a transparent, customized quote today!</p>
                </div>

                <div className="quote-cards qC2"></div>

                <div className="quote-cards qC3">
                    <div className="quote-cta-btns">
                        <button className='btn4'>
                            <a href="tel:+256767730511"><i className="fa-solid fa-phone"></i> Contact Us</a>
                        </button>
                        <button className='btn3' onClick={handleDownload}>Get a Quote Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Quote
