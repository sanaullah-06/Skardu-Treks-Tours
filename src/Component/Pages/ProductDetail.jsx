import React from 'react';
import '../PrductDetail.css';
import {useParams} from "react-router-dom"
import productData from "../productData"
function ProductDetail() {

    const {id} = useParams()
    
    const thisProduct = productData.find(prod => prod.id === id)
    
 
   
    return(
      <div className="container">
        {
         
            <div className="details" key={id}>
              <div className="big-img">
                <img src={thisProduct.src} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{thisProduct.label}</h2>
                  
                </div>
              

                <p>{thisProduct.text}</p>
                <p>Welcome to Skardu treks and tour. Here you can get our services, Hotels, Ticketing, Food and Transportation.</p>

               
                <button className="cart">Book Now</button>

              </div>
            </div>
         
        }
      </div>
    );
  
}

export default ProductDetail;