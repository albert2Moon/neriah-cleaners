/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ContactUs.css'
import {
    Button,
    Form,
    Input
} from 'antd';



const ContactUs = () => {

    const [componentVariant, setComponentVariant] = useState('outlined');
    const onFormVariantChange = ({ variant }) => {
        setComponentVariant(variant);
    };

    return (
        <>
            <div className="contact-us-container" id='contact-us-section'>

                <div className="section-title">
                    <div className="st1"></div>
                    <div className="st2">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="st3"></div>
                </div>

                <h1>Get in Touch</h1>

                <div className="contact-card-container">
                    <div className="contact-card1">
                        <fieldset>

                            <legend>Message</legend>

                            <Form

                                onValuesChange={onFormVariantChange}
                                variant={componentVariant}
                                style={{
                                    width: '100%',
                                    maxWidth: 500,
                                }}
                                initialValues={{
                                    variant: componentVariant,
                                }}

                                className='contact-us-form'
                            >

                                <Form.Item
                                    name="Input"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your name!',
                                        },

                                    ]}
                                >
                                    <Input placeholder="Enter your name"
                                        style={{
                                            border: "1px solid #29a9d2",
                                            height: "40px",
                                            borderRadius: "30px",
                                            width: "100%",
                                            padding: '0 18px',
                                            fontSize: '16px',
                                            color: '#5e5e5e',
                                            background: '#ffffff'
                                        }} />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    hasFeedback
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Invalid email!',
                                            
                                        },
                                        {
                                            required: true,
                                            message: 'Please enter your email!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Enter your email"
                                        style={{
                                            border: "1px solid #29a9d2",
                                            height: "40px",
                                            borderRadius: "30px",
                                            width: "100%",
                                            padding: '0 18px',
                                            fontSize: '16px',
                                            color: '#5e5e5e',
                                            background: '#ffffff'
                                        }}
                                        id='error2' />
                                </Form.Item>

                                <Form.Item
                                    name="TextArea"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your message!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={8} placeholder='Enter your message'
                                        style={{
                                            border: "1px solid #29a9d2",
                                            borderRadius: "10px",
                                            width: "100%",
                                            padding: '0 18px',
                                            fontSize: '16px',
                                            color: '#5e5e5e',
                                            background: '#ffffff'
                                        }} />
                                </Form.Item>



                                <Form.Item

                                >
                                    <Button className='contact-us-form-btn' type="primary" htmlType="submit">
                                        Send
                                    </Button>
                                </Form.Item>
                            </Form>

                        </fieldset>
                    </div>

<div className="vertical-divider"></div>

                    <div className="contact-card2">
                        <div className="contact-card-info">
                            
                            <div className="cci">
                                <div> <i className='fa-solid fa-envelope'></i></div>
                                <div>
                                <h3>Email</h3>
                                <a href="mailto:">info@neriahcleaners.com</a>
                                </div>
                            </div>
                            <div className="cci-divider"></div>
                            <div className="cci">
                                <div><i className='fa-solid fa-phone'></i></div>
                                <div>
                                <h3>Contact</h3>
                                <a href="tel:+256767730511">0767730511</a>
                                </div>
                            </div>
                            <div className="cci-divider"></div>
                            <div className="cci">
                                <div><i className='fa-solid fa-location-dot'></i></div>
                                <div>
                                <h3>Address</h3>
                                <p>Kampala</p>
                                </div>
                            </div>
                            
                        </div>
                        <h1>Our Socials</h1>
                        <div className="contact-card-socials">
                            <div className="ccs"><a href="https://wa.me/+256767730511"><i className='fa-brands fa-whatsapp'></i></a></div>
                            <div className="ccs"><a href="#"><i className='fa-brands fa-facebook'></i></a></div>
                            <div className="ccs"><a href="#"><i className='fa-brands fa-instagram'></i></a></div>
                            <div className="ccs"><a href="#"><i className='fa-brands fa-linkedin'></i></a></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ContactUs
