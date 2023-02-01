import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Price from '../components/Pricing'

const Pricing = () => {
  return (
    <>
        <Navbar />
        <HeroImage heading='PRICING.' text="Choose your trip." />
        <Price />
        <Footer />
    </>
  )
}

export default Pricing