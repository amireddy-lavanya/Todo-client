import './todo.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Todo = ()=>{
    const navigate = useNavigate();
    
    const data=[{
        activity: "Cooking",
        status: "Ongoing",
        timeTaken: "",
    }]

    const User = localStorage.getItem("email").split('@')[0].toUpperCase()
        
    return(
        <div>
            <header className='header'>
                <h3>{User}</h3>
            </header>
            <div>
                <div className='left-box'>
                   <h5>To do List</h5>
                   <p>History</p>
                   <button onClick={()=>{
                    localStorage.removeItem("token").
                    localStorage.removeItem("email")
                    navigate("/")
                    window.alert("logged out successfully")
                   }}>Logout</button>
                </div>
                <div className='right-box'>
                     <button>Add New Activity</button>
                     <table>
                        <thead>
                            <th>Activity</th>
                            <th>Status</th>
                            <th>Time Taken
                                <br/>
                                (Hrs:Min:Sec)
                            </th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                 { data.map((udata, index)=>
  
                    <tr>
                        <td>{udata.activity}</td>
                        <td>{udata.status}</td>
                        <td>{udata.timeTaken}</td>
                        <td>start</td>
                    </tr>

)}
                     </tbody>
                     </table>
                     
                </div>
            </div>
        </div>

    )
}

export default Todo;