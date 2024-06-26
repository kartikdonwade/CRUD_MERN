import React, { useEffect, useState } from 'react'
import {Link,  useParams, useNavigate} from 'react-router-dom'
import "./edit.css"
import axios from 'axios'
import toast from 'react-hot-toast';
const Edit = () => {
const users ={
  fname:"",
  lname:"",
  email:""
}
 const {id} = useParams();
 const navigate =useNavigate();
 const [user, setUser] = useState(users);
 const inputchanged = (e) => {
  const {name, value} = e.target;
   setUser({...user, [name]: value });

 }
   useEffect(() =>{
axios.get(`http://localhost:8000/api/getone/${id}`).then((res) => {
setUser(res.data);

}).catch((err) => {
  console.log(err);
});

  },[id])


  const submitform= async (e) => {
      e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((res) => {
    
toast.success(res.data.message, {position:"top-right"})
  
 navigate('/')
    }).catch(err => console.log(err));
  }


  return (
    <div className='adduser'>
      <Link className='backbu' to="/">Back
    </Link>
    <h3>Update User</h3>
    <form className='formadd' onSubmit={submitform}>
      <div className='inputf'><label>First Name</label>
      <input type="text" name="fname" value={user.fname} onChange={inputchanged} placeholder='First Name'/></div>
      <div className='inputf' >  <label>Last Name</label>
      <input type="text" name="lname" value={user.lname} onChange={inputchanged} placeholder='Last Name' /></div>
    <div className='inputf'>  <label>Email</label>
      <input type="email" name="email" value={user.email}  onChange={inputchanged} placeholder='Email'/></div>
 
   <div className='inputf'><button className="btn btn-primary " type="submit">Add User</button></div>

      </form></div>
  )
}

export default Edit
