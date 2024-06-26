import React from 'react'
import Users from './Users'
import UserContext from './Context/UserContex'

function UserDashBoard() {
    const users ={
              userName : "mona"
    }
  return (
    <UserContext.Provider value={users}>
      <h4>UseContext Hook</h4>
      <Users/>
    </UserContext.Provider>
  )
}

export default UserDashBoard
