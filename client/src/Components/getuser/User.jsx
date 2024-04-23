import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./User.css";
const User = () => {

const [users,setusers] =useState([]);
useEffect(()=>{
const fetchdata =async () =>{
const response =await axios.get("http://localhost:8000/api/getall");
setusers(response.data);
}

fetchdata();
},[])
const duser =async (userid) =>{
await axios.delete(`http://localhost:8000/api/delete/${userid}`)
.then(()=>{
setusers((prev)=>prev.filter((user)=>user._id !== userid));

}).catch((error) =>{console.error(error)})

}
  return (
    <div className='usertable'>
      <Link to='./add' className='addbu' >Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0} >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=>{
              return( <tr key={user._id}>
            <td>{index+1}</td>
            <td>{user.fname} {user.lname}</td>
            <td>{user.email}</td>
            <td className='actionbutton'>
              <Link to='./edit'><i className="fa-regular fa-pen-to-square"></i></Link>
              <button onClick={()=>duser(user._id)}><i className="fa-solid fa-trash"></i></button>
            </td>
          </tr>);
 
            })
          }
        
        </tbody>
      </table>
    </div>
  )
}

export default User