import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css";
const User = () => {
  return (
    <div className='usertable'>
      <Link to='./adduser' className='addbu' >Add User</Link>
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
          <tr>
            <td>1</td>
            <td>Kartik</td>
            <td>abc@gmail.com</td>
            <td className='actionbutton'>
              <Link to='./edituser'>Edit</Link>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User