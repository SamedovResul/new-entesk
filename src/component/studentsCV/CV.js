import React, {useEffect,useRef} from 'react';
import Rellax from "rellax";
import './cv.css'
import { studentData } from './studentData';
import UserParams from './useParams';
import { Link } from 'react-router-dom';

const Cv = (props) => {
  const {setCertificates} = props
  let boolean = true
  const rellaxRef = useRef();
  let studentNamelocation
 const {name, } = UserParams(boolean)

 
 

  useEffect(() => {
    new Rellax(rellaxRef.current, {
      speed: 4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    
    
  }, []);
  // console.log(props)
  function Studentname(params) {
    setCertificates(params)
    console.log(params)
  }

  return (
    <>
      {
        studentData.map((data,index) =>{
          const {studentName,resBackImg, frontImg,backImg,className} = data
          console.log(resBackImg)
          // setCertificates(studentName)
          // console.log(frontImg)
          
          if(studentName === name){
            studentNamelocation = studentName
            return(
              <div key={index} className="one">
                <img  src={backImg} alt="img" className='img1' />
                <img src={resBackImg} alt="img" className='img2' />
                <div className="front rellax">
                  <img src={frontImg} alt="img" useref={rellaxRef} />
                </div>

                <div className={`map ${className} `} >
                  <Link to={`/${studentName}/${studentName}`} onClick={() => Studentname(studentName)} >
                    Certificates
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </Link>
                </div>
              </div>
            )
            
          }
        })
      }
    </>
  );
};

export default Cv;
