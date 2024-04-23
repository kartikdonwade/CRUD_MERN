import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import "./add.css"
import toast from 'react-hot-toast'

const Add = () => {
      const users={
      fname:"",
      lname:"",
      password:"",
      email:""

    }
    const [user,setuser]= useState(users);
    const navigate =useNavigate();
  const inputHandler = (e) =>{

    const{name, value} = e.target;
    setuser({...user,[name]:value});
  
    
  }
  const submitform = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create",user)
    .then((res) => {
toast.success(res.data.msg, {position:"top-right"})
 navigate('/')
    }).catch(err => console.log(err));
   
  }
  return (
    <div className='adduser'>
      <Link className='backbu' to="/">Back
    </Link>
    <h3>Add User</h3>
    <form className='formadd' onSubmit={submitform}>
      <div className='inputf'><label>First Name</label>
      <input type="text" onChange={inputHandler} name="fname" placeholder='First Name'/></div>
      <div className='inputf' >  <label>Last Name</label>
      <input type="text" onChange={inputHandler} name="lname" placeholder='Last Name' /></div>
    <div className='inputf'>  <label>Email</label>
      <input type="email" onChange={inputHandler} name="email" placeholder='Email'/></div>
    <div className='inputf'>   <label>Password</label>
      <input type="password" onChange={inputHandler} name="password" placeholder='Password'/></div>
   <div className='inputf'><button className="btn btn-primary " type="submit">Add User</button></div>

      </form></div>
  )
}

export default Add
