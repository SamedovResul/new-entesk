import React,{useEffect} from 'react'

const SelectClass = ({params}) => {


  console.log(params)
  return(
    params.map((clas, index) => {
      return (
        <option key={index} >
          
        </option>
      );
    })
  )
}

export default SelectClass