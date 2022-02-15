import React, {useState, useEffect} from 'react'
import "../admin.css"
import {useDispatch } from 'react-redux';
import { SignInAdmin } from '../../../reducer/crmReducer/action'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let state = useSelector((state) => state.admin);
  console.log(state.authData)
  const [admin, setAdmin] = useState({
    email:'',
    password:''
  })

  // useEffect(() => {
    
  // }, [])
  // console.log(admin)
  const SignIn = (e) => {
    e.preventDefault();
    dispatch(SignInAdmin(admin,history))

  }

  // console.log(admin)
  return (
   <>
   <div className="container">
     <div className="container-fluid">
       <div className="row">
         <div className="col-md-12">
           <div className='admin-form' >
            <form action="">
                <label htmlFor="email">
                  email: <input type="email" id='email' 
                  onChange={(e)=> setAdmin({
                    ...admin, email: e.target.value
                  }) } />
                </label>
                <label htmlFor="password">
                  password: <input type="password" id='password' 
                  onChange={(e)=> setAdmin({
                    ...admin,  password: e.target.value
                  })}
                   />
                </label>
                <button onClick={SignIn} >
                  SignIn
                </button>
              </form>
           </div>
         </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default Login
