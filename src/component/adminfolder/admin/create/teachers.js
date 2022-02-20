import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
// import { CreateTeacher, UpdateTeacher,GetTeacher,DeleteTeacher} from '../../../../reducer/crmRedux/action';

const Classes = () => {
  const [data, setData] = useState({
    name:"",
    content:"",
  })
  // console.log(data)
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.teacherReducer);
    // update
    
    
    console.log(state)
    
  useEffect(() => {
    dispatch(GetTeacher())
  }, [])
  

    

  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])

    // console.log(id)
  const createClass = (e) =>{
    if(id.id){
      dispatch(UpdateTeacher(id.id,data))
      console.log(true)
    }else{
      dispatch(CreateTeacher(data))
      console.log(false)
    }
  }

  const deleteClass =(id) =>{
    console.log(id)
    dispatch(DeleteTeacher(id))
  }
  return (
    <div className='create-data'>
      <p>create teacher</p>
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