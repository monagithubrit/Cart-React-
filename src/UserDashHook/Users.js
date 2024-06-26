import React,{useContext}from 'react'
import Details from './Details'
import UserContext from './Context/UserContex'

function Users() {
    const data = useContext(UserContext);
    console.log(data)
  return (
    <div>
      <h4>Users : {data.userName} </h4>
      <Details/>
    </div>
  )
}

export default Users
