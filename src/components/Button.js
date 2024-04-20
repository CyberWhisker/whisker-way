import React from 'react'

function Button(props) {
    const { color } = props;
  return (
    <button className={`p-2 border-2 rounded-xl ${color} shadow-md shadow-slate w-full`} type='submit'>{props.children}</button>
  )
}

export default Button