//import React from 'react'
import ExclusiveOffers from '../components/ExclusiveOffers'
import FeaturedDestination from '../components/FeaturedDestination'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <>
      <Hero/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default Home
