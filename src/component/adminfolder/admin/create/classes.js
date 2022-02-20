import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { 
  CreateClass, 
  UpdateClass,
  GetClass,
  DeleteClass
} from '../../../../reducer/crmRedux/action';

const Classes = () => {
  const [data, setData] = useState({
    name:"",
    content:"",
  })
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.classReducer);
    
    // get classes
  useEffect(() => {
    dispatch(GetClass())
  }, [])
  

    
  // select update classes
  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])

    // create delete class
  const createClass = (e) =>{
    if(id.id){
      dispatch(UpdateClass(id.id,data))
      setData({
        name:"",
        content:"",
      })
    }else{
      dispatch(CreateClass(data))
      setData({
        name:"",
        content:"",
      })
    }
  }

  const deleteClass =(id) =>{
    console.log(id)
    dispatch(DeleteClass(id))
  }
  return (
    <div className='create-data'>
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
          {
            id.id ? (
              <span>update</span> 
            ):(
              <span>create</span> 
            )

          }
          
      </button>
      
      <div className="data">

        <ul>
          {
            state.map((clas, index) =>{
              const {name, _id,content} =clas
              
              return(
                <div key={index}>
                  <li  key={index} value={_id} onClick={()=>{
                    setId({id: _id})
                  }}>
                  <span> {name} </span> 
                  </li>
                    <button
                      onClick={()=>{
                        deleteClass(_id)
                      }}
                    >
                    &#9747;
                    </button>
                </div>

              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Classes