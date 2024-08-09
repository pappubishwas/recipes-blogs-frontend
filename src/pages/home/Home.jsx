import React from 'react'
import Hero from '../../components/Hero'
import CatagoryWrapper from '../category/CatagoryWrapper'
import FeaturedSection from './FeaturedSection'
import LatestRecipe from './LatestRecipe'
import NewsLetter from './NewsLetter'
import AboutSection from './AboutSection'
import CompanyLogo from './CompanyLogo'
import Subscription from './Subscription'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full'>
      <Hero/>
      <CatagoryWrapper/>

      {/* others component */}
      <FeaturedSection/>
      <LatestRecipe/>
      <NewsLetter/>
      <AboutSection/>
      <CompanyLogo/>
      <Subscription/>
      </div>
    </div>
  )
}

export default Home