import React from 'react';
import styles from '../Auth.module.css';
import bg2 from '../images/bg2.png';
import {Card, Input, Button} from '../../../components';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <div className='h-screen' id={styles.Login}>
        <div className='lg:hidden bg-slate-100 h-96'></div>
        <div className='lg:hidden bg-blue-800 h-72'></div>
        <div className='grid lg:grid-cols-2 h-full absolute top-0'>
          <div className='px-10 lg:px-24'>
            <div className='mt-5'>
              <label className=' text-3xl font-extrabold'>Whisker Way</label>
            </div>
            <label className='font-bold'>Register</label>
            <div className='mt-10'>
              <Card>
                <label className='mt-2'>Enter First Name:</label>
                <Input name={'first_name'}/>
                <label className='mt-2'>Enter Last Name:</label>
                <Input name={'last_name'}/>
                <label className='mt-2'>Enter Mobile Number:</label>
                <Input name={'mobile'}/>
                <label className='mt-2'>Enter Email:</label>
                <Input name={'email'}/>
                <label className='mt-2'>Enter Password:</label>
                <Input name={'password'}/>
                <label className='mt-2'>Re-enter Password:</label>
                <Input name={'re_password'}/>
                <div className='flex justify-end mt-2'>
                  <Link to={'/login'}>I have an account</Link>
                </div>
                <div className='mt-2'>
                  <ul className='list-none'>
                    <li>
                      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"></input>
                      <b className='ml-2'>Terms and conditions</b>
                      <br/>
                      <label className='text-xs ml-5'>You agree to our Terms of Service and Privacy Policy</label>
                    </li>
                    <li>
                      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" ></input>
                      <b className='ml-2'>I am not a robot</b>
                    </li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                    <Link to='/login'><Button color={'bg-sky-800 border-sky-800 px-10 text-white'}>Register</Button></Link>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <img src={bg2}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register