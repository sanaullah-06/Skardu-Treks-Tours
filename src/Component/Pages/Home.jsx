import '../../App.css';
import HeroSection from '../HeroSection';
import {motion, AnimatePresence} from "framer-motion";
import React from 'react'
import Card from '../Card';
import Gallery from '../Gallery';


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
        <Gallery />
        
    </motion.div>
  )
}

export default Home;
