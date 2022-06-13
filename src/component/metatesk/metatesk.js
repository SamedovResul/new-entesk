import React,{useEffect} from 'react';
import SectionOne from './sectionOne';
import "./Meta.css";
import FooterSection from '../homeFolder/footerSection';
import Course from '../../course'

const Metatesk = () => {
  const data = Course.Course
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <article>
      <div className="col-md-12 main-about"  >
        <h2>Metatesk</h2>
      </div>
      <SectionOne />
      <FooterSection data={data} />
    </article>
  )
}

export default Metatesk