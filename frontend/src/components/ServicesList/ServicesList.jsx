/* eslint-disable no-unused-vars */
import React from 'react'
import './ServicesList.css'
import { services } from '../../assets/assets'
import { Link } from 'react-router-dom';

const ServicesList = () => {

    return (
        <>
            <section className='service-list-section' id='our-services'>
                <div className="services-container">
                    <div className="section-title">
                        <div className="st1"></div>
                        <div className="st2">
                            <h5>OUR SERVICES</h5>
                        </div>
                        <div className="st3"></div>
                    </div>
                    <div className="service-title-section">
                        <h1>Our Services </h1>
                    </div>
                    <div className="services-card-container">
                        {services.map((service, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-card-img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="service-card-body">
                                    <h4>{service.title}</h4>
                                    <p>{service.shortDescription}</p>
                                </div>
                                <div className="service-card-btn">
                                    <button className='btn1'>
                                        <Link to={`/services/${index}`}>Read more</Link>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )

}

export default ServicesList
