import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch } from 'react-redux';
import { CreateClass, UpdateClass } from '../../../../reducer/crmReducer/action';

const Classes = () => {
  const [data, setData] = useState({
    name:"",
    content:"",
    _id:''
  })
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.crmData);
  console.log(id)
    // update
    const update = useSelector((state) => id.id? state.crmData.classes.find((classes) =>classes._id ===id.id): null)

  useEffect(() => {
    if(update){
      setData(
        update
      )
      console.log(update)
    }
  }, [id])
    
  const createClass = (e) =>{
    if(update){
      dispatch(UpdateClass(id.id,data))
      console.log(true)
    }else{
      dispatch(CreateClass(data))
      console.log(false)
    }
  }

  
  return (
    <div className='create-class'>
      <p>create class</p>
      <form action="">
        <label htmlFor="name">
          class name
          <input type="text" id="name"
          value={data.name}
            onChange={(e) =>{
              setData({
                ...data, name: e.target.value
              })
            }}
          />
        </label>
        <label htmlFor="content">
          content
          <input type="text" id="content" 
            value={data.content}
            onChange={(e) =>{
              setData({
                ...data, content:e.target.value
              })
            }}
          />
        </label>
      </form>
      <button
          onClick={() =>{
            createClass()
          }}
        >
          create
      </button>
      
      <div className="classes">
        <select name="" id="" onChange={(e)=>{
          setId({id: e.target.value})
        }}>
          <option value="">select</option>
          {
            state.classes.map((clas, index) =>{
              const {name, _id,content} =clas
              
              return(
                <option key={index} value={_id}>
                  {name}
                </option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default Classes