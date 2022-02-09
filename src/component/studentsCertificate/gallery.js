import React from 'react'
import './gallery.css'
import GalleryData from './GalleryData'
import SectionOne from './sectionOne'

const Gallery = () => {
  console.log(true)
  return (
    <div className='Certificate-header' >
     <h1> Certificate </h1>
      <SectionOne GalleryData={GalleryData} />  
    </div>
  )
}

export default Gallery