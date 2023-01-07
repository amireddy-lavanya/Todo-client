import { createContext , useState  } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react' 
import axios from 'axios' ;

export const Context = createContext();
export const Provider = (props)=>{
    const[email , setEmail] =useState();
    const [token ,  setToken] = useState();

    const nav = useNavigate();
    const  userSignIn = (loginData) =>{
        axios.post("http://localhost:3000/login" , loginData)
        .then((res)=>{setToken(res.data.token)
        localStorage.setItem("token" , res.data.token)
        localStorage.setItem("email" , loginData.email)
        nav('/todo');
       window.alert("login successfull")
       setEmail(loginData.email)
        })
        .catch((err)=>{
            console.log(err.response.data.message)
            window.alert("login successfull")
        }
        )
        
    }
    const userSignUp = (userData)=>{
        try{
            axios.post("http://localhost:3000/register" , userData)
            .then ((res)=>{
                nav('/');
                window.alert("Registration Successfull")
            })
            .catch((err)=>
            window.alert(err.response.data.error)
            )
        }
        catch(e){
            window.alert(e.message)
        }
    }

    return(
        <Context.Provider value={{userSignIn , userSignUp , token, email}} >
            {props.children}
        </Context.Provider>
    )
}