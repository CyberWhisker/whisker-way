import React from 'react'

function Input({name}) {
  return (
    <input className='border-2 border-black rounded-lg w-full p-1' type='text' name={name}/>
  )
}

export default Input