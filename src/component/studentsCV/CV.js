import React, {useEffect,useRef} from 'react';
import Rellax from "rellax";
import './cv.css'
import { studentData } from './studentData';
import UserParams from './useParams';

const Cv = () => {
  let boolean = true
  const rellaxRef = useRef();
  let studentNamelocation
 const {name} = UserParams(boolean)

  

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
  return (
    <div className="one">
      {
        studentData.map((data,index) =>{
          const {studentName, frontImg,backImg} = data
          console.log(frontImg)
          if(studentName === name){
            studentNamelocation = studentName
            return(
              <div key={index} className="one">
                <img  src={backImg} alt="img" />
  
                <div className="front rellax">
                  <img src={frontImg} alt="img" useref={rellaxRef} />
                </div>
              </div>
            )
            
          }
        })
      }
    </div>
  );
};

export default Cv;
