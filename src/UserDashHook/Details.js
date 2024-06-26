import React, { useContext } from 'react'
import UserContext from './Context/UserContex'

function Details() {
    const data = useContext(UserContext)
  return (
    <div>
      <h4>Details: {data}</h4>
    </div>
  )
}

export default Details
