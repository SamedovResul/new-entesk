import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function circular() {

  const percentage = 66
  return (
    <div className='conatiner'>
      <div className='conatiner-fluid'>
        <div className='row'>
          <div className='col-md-12 text-center '>
            <b>Loading</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default circular
