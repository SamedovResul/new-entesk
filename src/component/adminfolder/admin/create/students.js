import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { CreateStudent, UpdateStudent,GetStudent} from '../../../../reducer/crmRedux/action';

const Classes = () => {
  const [data, setData] = useState({
    firstName:"",
    secondName:"",
    age:0,
    status:0
  })
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.studentReducer);
  // console.log(data)
  // get student
  useEffect(() => {
    dispatch(GetStudent())
  }, [])
  
    
// select update student
  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])


  // create and update student
  const createClass = (e) =>{
    if(id.id){
      dispatch(UpdateStudent(id.id,data))
      setData({
        firstName:"",
        secondName:"",
        age:0,
      })
    }else{
      dispatch(CreateStudent(data))
      setData({
        firstName:"",
        secondName:"",
        age:0,
      })
    }
  }

 
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="create-student">
            <p>create Student</p>
               <form action="">
                 <label htmlFor="name">
                   <b>firstName :</b>
                   <input type="name" id="name"
                   value={data.firstName}
                     onChange={(e) =>{
                       setData({
                         ...data, firstName: e.target.value
                       })
                     }}
                   />
                 </label>
                 <label htmlFor="secondName">
                    <b>secondName :</b>
                   <input type="secondName" id="secondName" 
                     value={data.secondName}
                     onChange={(e) =>{
                       setData({
                         ...data, secondName:e.target.value
                       })
                     }}
                   />
                 </label>
                 <label htmlFor="number">
                    <b>age :</b>
                   <input type="number" id="password"
                     value={data.age}
                     onChange={(e) =>{
                       setData({
                         ...data, age:e.target.value
                       })
                     }}
                       />
                 </label>
                 <label htmlFor="status">
                    <b>status</b>
                   <select name="" id="status"
                     onChange={(e)=>{
                       setData({
                         ...data, status: parseInt(e.target.value) 
                       })
                     }}
                   >
                     <option >select status</option>
                     <option value="0">inactive</option>
                     <option value="1">active</option>
                   </select>
                 </label>
                 <button
                    onClick={() =>{createClass()}}>
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
        </div>
      </div>
    </div>

    // <div className='create-data'>
    //   <p>create Student</p>
    //   <form action="">
    //     <label htmlFor="name">
    //       firstName
    //       <input type="name" id="name"
    //       value={data.firstName}
    //         onChange={(e) =>{
    //           setData({
    //             ...data, firstName: e.target.value
    //           })
    //         }}
    //       />
    //     </label>
    //     <label htmlFor="secondName">
    //       secondName
    //       <input type="secondName" id="secondName" 
    //         value={data.secondName}
    //         onChange={(e) =>{
    //           setData({
    //             ...data, secondName:e.target.value
    //           })
    //         }}
    //       />
    //     </label>
    //     <label htmlFor="number">
    //       age
    //       <input type="number" id="password"
    //         value={data.age}
    //         onChange={(e) =>{
    //           setData({
    //             ...data, age:e.target.value
    //           })
    //         }}
    //           />
    //     </label>
    //     <label htmlFor="status">
    //       status
    //       <select name="" id="status"
    //         onChange={(e)=>{
    //           setData({
    //             ...data, status: parseInt(e.target.value) 
    //           })
    //         }}
    //       >
    //         <option >select status</option>
    //         <option value="0">inactive</option>
    //         <option value="1">active</option>
    //       </select>
    //     </label>
        
    //   </form>
    //   <button
    //       onClick={() =>{
    //         createClass()
    //       }}
    //     >
    //       {
    //         id.id ? (
    //           <span>update</span> 
    //         ):(
    //           <span>create</span> 
    //         )

    //       }
          
    //   </button>
      
    //   <div className="data">

    //     <ul>
    //       {
    //         state.map((student, index) =>{
    //           const {
    //           firstName,
    //           secondName,
    //           age,
    //           status,
    //           _id
    //         } = student
              
    //           return(
    //             <div key={index}>
    //               <button
    //                 onClick={()=>{
    //                   setId({id: _id})
    //                 }}
    //               >
    //                 update
    //               </button>
    //               <li  key={index} value={_id} >
    //               First name: {firstName} 
    //               {/* <span>status {
    //                   status === 1? ( <p>active</p> ) :( <p>inactive</p> )
    //                 } 
    //               </span> */}
    //               </li>
    //               <li>
    //               Second name: {secondName}
    //               </li>
    //               <li>
    //               age:  {age}
    //               </li>
    //               <li>
    //               Status: {
    //                   status === 1? ( <span>active</span> ) :( <span>inactive</span> )
    //                 } 
    //               </li>
    //             </div>

    //           )
    //         })
    //       }
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Classes