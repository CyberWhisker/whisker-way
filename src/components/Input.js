import React from 'react'

function Input({name, text}) {
  return (
    <input className='border-2 border-black rounded-lg w-full p-1' type='text' name={name} placeholder={text}/>
  )
}

export default Input