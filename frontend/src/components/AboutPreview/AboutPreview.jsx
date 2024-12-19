/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';
import { assets } from '../../assets/assets';

const AboutPreview = () => {
  return (
    <div className="about-container">
      <div className="about-img">
        <img src={assets.img1} alt="" />
      </div>
      <div className="about-card2">
        <div className="section-title">
          <div className="st1"></div>
          <div className="st2">
            <h5>ABOUT US</h5>
          </div>
          <div className="st3"></div>
        </div>
        <h1>We are Different in the Cleaning Industry</h1>
        <div className="abt-paragraph">
          <p>
            Neriah Cleaning Services aims to be the leading cleaning provider in East Africa, offering reliable and professional services to homes and businesses in Kampala, Mpigi, Mukono, and Wakiso...
          </p>
        </div>
        <div className="about-values">
          <div className="av-1">
            <p><i className="fa-regular fa-circle-check"></i> Cost Effective</p>
          </div>
          <div className="av-1">
            <p><i className="fa-regular fa-circle-check"></i> Insured and Bonded</p>
          </div>
          <div className="av-1">
            <p><i className="fa-regular fa-circle-check"></i> 100% Satisfaction</p>
          </div>
          <div className="av-1">
            <p><i className="fa-regular fa-circle-check"></i> Quality Services</p>
          </div>
        </div>
        <div className="about-button">
          <button className="btn2">
            <Link to="/about#about-us">Read More <i className="fa-solid fa-arrow-right-long"></i></Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
