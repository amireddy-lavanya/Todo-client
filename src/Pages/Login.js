import React, { useContext, useEffect } from 'react' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Components/axios/axiosContext'
import "./login.css"

const Login =()=>{
    const {userSignIn} = useContext(Context)
    const navigate = useNavigate();
     const [userDetails , setUserDetails] = useState({email:"" , password:""})
     const [error , setError] =useState({});
     const [submit , setSubmit] = useState(false);
 
      const handleChange=(e)=>{
        setUserDetails({...userDetails , [e.target.name]:e.target.value})
      }

      const handleSubmit=(e)=>{
        e.preventDefault();
        setError(validate(userDetails));
        setSubmit(true);
      }

      useEffect(()=>{
        if(Object.keys(error).length === 0 && submit){
         userSignIn(userDetails)
        }
     } ,[MediaError])
      const validate =(values)=>{
               const err={};
               const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i ;
               if(!values.email){
                err.email = "* email is required";
               }
               if(!emailRegex.test(values.email)){
                err.email="*email is invalid"
               }
               if(!values.password){
                   err.message="forgot password"
               }
               return err

      }

    return(
        <div className='main'>
              <h1>Member Login</h1>
              <form className='login-form' method='POST' onSubmit={handleSubmit}>
               <div className='centre'>
               <div className='login-email'>
                <input className='login-email'
                   type='email'
                   placeholder='Enter email Id'
                   onChange={handleChange} />
               </div>
               <p style={{color:"white"}}  >{error.email}</p>
               
               <div className='login-password'>
                 <input className='login-password'
                 type='password'
                 placeholder='Enter password'
                 onChange={handleChange}/>
               </div>
               <p style={{color:"white"}}>{error.password}</p>
               <button className='login-btn' >LOGIN</button>
               <div>
                <button className='register-btn' onClick={()=>navigate('/register')}>Register</button>
              </div>
              </div>
              </form>
              

              

        </div>
    )

}

export default Login;