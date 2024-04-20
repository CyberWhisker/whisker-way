import React, { useState } from 'react';
import styles from './components.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import Bar from './images/bar.svg';

function TopNav({toggleSidebar}) {
  return (
    <>
        <div className='fixed z-50 top-0' id={styles.TopNav}>
            <div className='h-full flex item-center p-4 lg:hidden'>
              <img className='size-10 cursor-pointer' src={Bar} alt='bar' onClick={toggleSidebar}/>
            </div>
            <div className='hidden lg:flex justify-between items-center h-full  '>
                <Link to='/'><label>Logo</label></Link>
                <div className='flex justify-end gap-3 items-center'>
                    <Link to='/finder'><label>Finder Tools</label></Link>
                    <Link to='/partner'><label>Out Partners</label></Link>
                    <Link to='/about'><label>About Us</label></Link>
                    <Link to='/contact'><label>Contact</label></Link>
                    <Link to='/faq'><label>FAQs</label></Link>
                    <Link to='/register'><Button color={'bg-white px-10'}>Register</Button></Link>
                    <Link to='/login'><Button color={'bg-sky-400 border-sky-400 px-10'}>Login</Button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopNav