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
                    id='1'
                    src='images/img-9.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/ProductDetail"
                    />
                     <CardItem 
                     id='2'
                    src='images/img-2.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/ProductDetail"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    id='3' 
                    src='images/img-3.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/ProductDetail"
                    />
                     <CardItem
                     id='4' 
                    src='images/img-4.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/ProductDetail"
                    />
                    <CardItem 
                    id='5'
                    src='images/img-8.jpg'
                    text="Explore the hidden Waterfall deep inside the Bashoo Jungle"
                    label="Adventure"
                    path="/ProductDetail"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default card