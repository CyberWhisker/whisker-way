import React from 'react'
import { Input } from '../../../components'

function Contact() {
  return (
    <>
        <div className='flex justify-center'>
            <h1 className='font-extrabold text-2xl'>Contact Us</h1>
        </div>
        <div className='flex justify-center'>
            <Form/>
        </div>
    </>
  )
}

function Form() {
    return (
        <>
            <form>
                <div className='grid grid-cols-2'>
                    <div className='flex'>
                        <label>Your Name:</label>
                        <Input name={'name'} text={'Enter Name'}/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact