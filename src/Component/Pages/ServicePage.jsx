import ServicesSection from './Services';
import React from 'react'
import {motion} from "framer-motion";
import '../../App.css';

function ServicePage() {
  return (
    <motion.div
    layout
    animate={{ opacity:1}}
    initial={{ opacity:0}}
    exit={{ opacity:1}}
>

        <ServicesSection/>
       
        
    </motion.div>
  )
}

export default ServicePage;
