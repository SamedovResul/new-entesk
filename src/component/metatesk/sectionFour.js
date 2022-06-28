import React from 'react';
import spacecraft from "./metaImg/spacecraft.png";
import characters from "./metaImg/characters.png";
import powers from "./metaImg/powers.png"
import galaxy from "./metaImg/galaxy.png"


const SectionFour = () => {
  return (
    <article className='section-Four'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-container">
                <h4>INSIDE THE UNIGALAX UNIVERSE</h4>
                <p>UniGalax consists of multiple planets, galaxies, and crafts as NFT assets. The NFT collections allow you to build, lend, or stake. Join our community to turn your courses into NFT assets that grow and expand within our metaverse.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box">
                <img src={spacecraft} alt="spacecraft" />
                <p>CRAFTS</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box">
                <img src={characters} alt="characters" />
                <p>CHARACTERS</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box">
                <img src={powers} alt="powers" />
                <p>COURSES</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box">
                <img src={galaxy} alt="galaxy" />
                <p>GALAXIES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionFour