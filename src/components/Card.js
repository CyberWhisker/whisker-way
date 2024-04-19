import React from 'react'

function Card(props) {
  return (
    <div className={`rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 w-full shadow-lg relative ${props.style}`}>{props.children}</div>
  )
}

export default Card