/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Routes, Route, HashRouter, Router, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import FAQs from './pages/FAQs/FAQs'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import BackToTop from './components/BackToTop/BackToTop'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import ServiceDetail from './components/ServicesList/ServiceDetail'

function App() {

  const location = useLocation();

  useEffect(() => {
      // Check if the URL contains the section to scroll to (e.g., "#about-us" or "#our-services")
      if (location.hash) {
        const section = document.getElementById(location.hash.substring(1)); // Remove the '#' from the hash
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className='app'>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </ErrorBoundary>

      </div>
      <BackToTop />
      <Footer />
    </>
  )
}

export default App
