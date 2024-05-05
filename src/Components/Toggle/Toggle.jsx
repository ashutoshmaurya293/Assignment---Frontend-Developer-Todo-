import React, { useState } from 'react'

const Toggle = ({toggle}) => {
    console.log(toggle);
    const [toggletodo, settoggletodo] = useState()
  return (
    <div className="fun" >
    <li>Completed</li>
    <li>Favourite</li>
    <li>Delete</li>
  </div>
  )
}

export default Toggle