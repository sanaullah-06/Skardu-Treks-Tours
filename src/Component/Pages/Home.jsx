import '../../App.css';
import HeroSection from '../HeroSection';
import {motion} from "framer-motion";
import React from 'react'
import Card from '../Card';
import Gallery from '../Gallery';
import ServicesSection from './Services';


function Home() {
  return (
    <motion.div
    layout
    animate={{ opacity:1}}
    initial={{ opacity:0}}
    exit={{ opacity:0}}
>
        <HeroSection />
        <Card />
        <ServicesSection/>
        <Gallery />
        
    </motion.div>
  )
}

export default Home;
