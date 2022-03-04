import React from 'react'
import CardItem from './CardItem'
import './Card.css';



function card() {
  return (
    <div className='cards'>
        <h1>
            Check out these EPIC Destination
        </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-9.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/services"
                    />
                     <CardItem 
                    src='images/img-2.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-3.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/services"
                    />
                     <CardItem 
                    src='images/img-4.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem 
                    src='images/img-8.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default card