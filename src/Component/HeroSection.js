import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection () {
  return (
    <div className='hero-container'>
      {/* <video className='videoTag' autoPlay loop muted>
    <source src="/videos/video-1.mp4" type='video/mp4' />
</video>
         */}
        <h1>SKARDU TREKS AND TOURS </h1>
        <p>Best Under The Northern SKY</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED

            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer <i className='far fa-play-circle'/>

            </Button>
        </div>
    </div>
  )
}

export default HeroSection;