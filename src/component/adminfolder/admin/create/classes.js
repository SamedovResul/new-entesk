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
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="create-class">
              <form action="">
                <label htmlFor="name">
                  <b>class name: </b>
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
                  <b>Title: </b>
                  <input type="text" id="content" 
                    value={data.content}
                    onChange={(e) =>{
                      setData({
                        ...data, content:e.target.value
                      })
                    }}
                  />
                </label>
                <button onClick={() =>{createClass()}}>
                    {
                      id.id ? (
                        <span>update</span> 
                      ):(
                        <span>create</span> 
                      )

                    }
                </button>
              </form>
            </div>
          </div>

          {
            state.map((clas, index) =>{
              const {name, _id,content} =clas

              return(
                <div key={_id} className="col-md-4">
                  <div className="info-table">
                    <p> <b>Class Name:</b> {name}  </p>
                    <p> <b>Title Name:</b> {content}  </p>
                    <button
                      onClick={()=>{setId({id: _id}) }} >
                      update
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Classes