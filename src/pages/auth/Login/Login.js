import React from 'react';
import styles from '../Auth.module.css';
import bg2 from '../images/bg2.png';
import {Card, Input, Button} from '../../../components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='h-screen' id={styles.Login}>
        <div className='lg:hidden bg-slate-100 h-96'></div>
        <div className='lg:hidden bg-blue-800 h-60'></div>
        <div className='grid lg:grid-cols-2 h-full absolute top-0'>
          <div className='px-10 lg:px-24'>
            <div className='mt-20'>
              <label className=' text-3xl font-extrabold'>Whisker Way</label>
            </div>
            <label className='font-bold'>Login</label>
            <div className='mt-10'>
              <Card>
                <label className='mt-2'>Enter Email:</label>
                <Input name={'email'}/>
                <label className='mt-2'>Enter Password:</label>
                <Input name={'password'}/>
                <div className='flex justify-end mt-2'>
                    <Link to={'/register'}>I don't have an account</Link>
                </div>
                <div className='flex justify-center gap-3 mt-2'>
                    <Link to={'/'}><Button>Login with Gmail</Button></Link>
                    <Link to={'/'}><Button color={'bg-blue-300'}>Login with Email</Button></Link>
                </div>
                <div className='mt-2'>
                  <ul className='list-none'>
                    <li>
                      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"></input>
                      <b className='ml-2'>Terms and conditions</b>
                      <br/>
                      <p className='text-xs ml-5'>You agree to our Terms of Service and Privacy Policy</p>
                    </li>
                    <li>
                      <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" ></input>
                      <b className='ml-2'>I am not a robot</b>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
          <div>
            <img src={bg2} alt='img'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login