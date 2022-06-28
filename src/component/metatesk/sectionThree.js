import React from 'react';
import metateskEarth from "./metaImg/metateskEarth.png";
import {useSpring,animated} from 'react-spring';

const sectionThree = () => {





  return (
    <article className='section-Three'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-container">
                <h3> INSIDE THE UNIGALAX UNIVERSE </h3>
                <p>From visiting galaxies to building, coaching, or learning, UniGalax rewards you for every action you take.</p>
              </div>
            </div>
            <div className="col-md-6">
            <div className="text-box"  >
              <p>► For Creators and Coaches</p>
              <p>Whether you are a university, platform, or educator, you can enable your content for  web3. </p>
              <p> Take advantage of UniGalax’s reward system to incentivize your learners!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-box" >
              <p>► For Learners & Players</p>
              <p>Get access to content and educators vetted by the community. </p>
              <p>Learn valuable skills, get access to exclusive communities, and earn tokens and authentication for your progress!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionThree