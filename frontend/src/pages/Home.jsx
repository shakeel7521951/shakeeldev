import React from 'react'
import Header from '../components/home/Header';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';
import KeyFeatures from '../components/home/KeyFeatures';
import OurValue from '../components/home/OurValue';
import Progress from '../components/home/Progress';
import Testimonials from '../components/home/Testimonials';
import Contact from './Contact';
import Faqs from './Faqs';
import HomeHeader from '../components/home/HomeHeader';
import Features from '../components/home/Features';

const Home = () => {
  return (
    <div className='mt-20'>
        {/* <Header /> */}
        <HomeHeader />
        <Features />
        <HomeAbout />
        <HomeServices />
        <KeyFeatures />
        <OurValue />
        <Progress />
        <Testimonials />
        <Contact />
        <Faqs />
    </div>
  )
}

export default Home;