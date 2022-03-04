import React from 'react'
import GalleryItem from './GalleryItem';
import './Gallery.module.css';





function Gallery() {
  return (
    <div className='gal'>
        <h1>
            Gallery
        </h1>
        <GalleryItem />        
    </div>
  )
}

export default Gallery