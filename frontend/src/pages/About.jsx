import React from 'react'
// import AboutHero from '../components/about/AboutHero';
import OurValue from '../components/home/OurValue';
import WhoWeAre from '../components/about/WhoWeAre';
import HomeAbout from '../components/home/HomeAbout';
import Testimonials from '../components/home/Testimonials';
import CareerPathways from '../components/about/CareerPathways';
// import OurVision from '../components/about/OurVision';

const About = () => {
  return (
    <div className='mt-20'>
      {/* <AboutHero/> */}
      <HomeAbout />
      <CareerPathways/>
      {/* <OurVision/> */}
      <WhoWeAre/>
      <OurValue/>
      <Testimonials/>
    </div>
  )
}

export default About;