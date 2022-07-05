import React from 'react';
import metateskEarth from "./metaImg/metateskEarth.png";
import {useSpring,animated} from 'react-spring';
import something from './metaImg/something.png';


const sectionThree = () => {




  return (
    <article className='section-Three'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="img-container">
                <img src={something}  height="500" width="400"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionThree