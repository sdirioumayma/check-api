import React, { useEffect, useState } from 'react'

import axios from "axios"
function UserList() {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=> {
            setUsers(res.data)
        }
            
            )
        .catch(err=>{
            console.log(err)
        })
    })
  return (
    <div >
        <div className='container'>
          <h1> list of usernames: </h1>
          <ul>
       {users.map(user => (
         <li>
            <a key={user.id} > {user.name} : {user.username}</a>
         </li>
           ))}
        </ul>
        </div>
    </div>
  )
}

export default UserList