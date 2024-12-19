/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Quote from '../../components/Quote/Quote'
import AboutPreview from '../../components/AboutPreview/AboutPreview'
import OurServices from '../../components/OurServices/OurServices'
import HowWeWork from '../../components/HowWeWork/HowWeWork'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import HomeHeader from '../../components/HomeHeader/HomeHeader'


const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="home-section">
        <AboutPreview />
        <OurServices />
        <HowWeWork />
        <Quote />
        <WhyChooseUs />
      </div>
    </>
  )
}

export default Home
