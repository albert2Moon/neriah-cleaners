/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import ContactUs from '../../components/ContactUs/ContactUs'
import ContactHeader from '../../components/ContactHeader/ContactHeader'

const Contact = () => {
  return (
    <>

    <ContactHeader />

      <div className='contact-us-section'>
        <ContactUs />
      </div>
    </>
  )
}

export default Contact
