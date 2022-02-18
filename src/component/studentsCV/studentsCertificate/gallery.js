import React from 'react'
import './gallery.css'
import {studentData} from '../studentData'
import SectionOne from './sectionOne'

const Gallery = () => {
  console.log(true)
  return (
    <>
      <div className='Certificate-header' >
     <h1> Certificates </h1>
    </div>
      <SectionOne studentData={studentData} />  
    </>
    
    
  )
}

export default Gallery