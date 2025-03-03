import React, { useState } from 'react'

const User = (props) => {
    const [count] = useState(0);
  return (
    <div className='user-container'>
        <h1>count:{count}</h1>
      <h2>{props.name}</h2>
      <h2>Address: Bulandshahr</h2>
    </div>
  )
}

export default User;
