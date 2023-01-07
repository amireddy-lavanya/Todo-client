import React, { useContext, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import {Context} from '../Components/axios/axiosContext';
import './register.css';


const Register=()=>{
    const {userSignUp} = useContext(Context)
    const [UserData , setUserData] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })
    const [isError , setIsError] = useState({});
    const [isSubmit , setIsSubmit] =useState(false);

    const handleChange=(e)=>{
        setUserData({...UserData , [e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsError(validate(UserData))
        setIsSubmit(true);
    }
    
    useEffect(()=>{
       if(Object.keys(isError).length === 0 && isSubmit){
        userSignUp(UserData)
       }
    } ,[isError])

    const validate = (values)=>{
        const err ={};
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

        if(!values.email)
        {
            err.email = "*email is required"
        }
        if(!emailRegex.test(values.email)){
            err.email="*email is invalid"
           }
           if(values.password <6 ){
               err.password="*password must have 6 characters"
           }
           if(values.password >12)
           {
            err.password="*password has max 12 characters"
           }
           if(values.password !== values.confirmPassword)
           {
            err.confirmPassword = "*password doesnot match!!"
           }
           return err
    }

    return(
        <div className="register-main">
            <h1> Register</h1>
            <form className="register-form" method="POST" onSubmit={handleSubmit}>
            <div className="centre">
             <div>
                <input className="register-email"
                type="email"
                placeholder='Enter Mail Id'
                onChange={handleChange} />
             </div>
                 <p style={{color:"red"}}>{isError.email}</p>
                 <div>
                    <input className="register-password"
                    type='password'
                    placeholder='password'
                    onChange={handleChange} />
                 </div>
                 <p style={{color:"red"}}>{isError.password}</p>
                 <div>
                    <input className="regiter-confirmpassword"
                    type="password"
                    placeholder='Confirm Password'
                    onChange={handleChange}/>
                 </div>
                 <p style={{color:"red"}}>{isError.message}</p>
                 <button className="register-btn">Register</button>
                 <p>Already you have an account <Link to='/' className="login-btn">LOGIN</Link> </p>
            </div>
            </form>
            
        </div>
    )
}

export default Register;