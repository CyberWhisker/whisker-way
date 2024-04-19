import React from 'react';
import BG from '../images/bg.png';
import Pet from '../images/WEB_4.png';

function Partner() {
  return (
    <>
        <div className='rounded-lg bg-cover bg-no-repeat relative shadow-2xl shadow-black' style={{backgroundImage: `url(${BG})`}}>
            <div className='grid grid-cols-2 justify-center items-center'>
                <img src={Pet} alt='Pet' style={{height: '400px'}}/>
                <div className='mt-24'>
                    <h1 className='font-extrabold text-4xl text-white'>Our Partner Shelters and Vets</h1>
                    <List/>
                </div>
            </div>
        </div>
    </>
  )
}

function List() {
    return(
        <>    
            <ul className='grid grid-cols-2 gap-5 text-white mt-5 text-lg font-bold'>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Animal Rescue PH</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Metro Vet Clinic</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Shelter Care Ph</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Pet Care Clinic</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Paw Print PH</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Vet Solutions</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Compassionate Vets</a>
                </li>
                <li className='flex items-center'>
                    <div className='bg-black h-10 w-10'></div>
                    <a href='#' className='ml-3'>Metro Animal Clinic PH</a>
                </li>
            </ul>
        </>
    )
}

export default Partner