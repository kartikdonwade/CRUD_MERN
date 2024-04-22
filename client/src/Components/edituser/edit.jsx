import React from 'react'
import {Link} from 'react-router-dom'
import "./edit.css"
const Add = () => {
  return (
    <div className='adduser'>
      <Link className='backbu' to="/">Back
    </Link>
    <h3>Update User</h3>
    <form className='formadd'>
      <div className='inputf'><label>First Name</label>
      <input type="text" name="fname" placeholder='First Name'/></div>
      <div className='inputf' >  <label>Last Name</label>
      <input type="text" name="lname" placeholder='Last Name' /></div>
    <div className='inputf'>  <label>Email</label>
      <input type="email" name="email" placeholder='Email'/></div>
    <div className='inputf'>   <label>Password</label>
      <input type="password" name="password" placeholder='Password'/></div>
   <div className='inputf'><button className="btn btn-primary " type="submit">Add User</button></div>

      </form></div>
  )
}

export default Add
