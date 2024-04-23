import React, { useState } from 'react';
import styles from './components.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';
import Bar from './images/bar.svg';

function TopNav({toggleSidebar, references}) {
  const [landingRef, finderRef, partnerRef, aboutRef, contactRef, faqRef] = references;
  return (
    <>
        <div className='fixed z-50 top-0' id={styles.TopNav}>
            <div className='lg:hidden flex justify-between items-center'>
              <div className='h-full flex item-center p-4'>
                <img className='size-10 cursor-pointer' src={Bar} alt='bar' onClick={toggleSidebar}/>
              </div>
              <div className='flex space-x-3 pr-4'>
                <Link to='/register'><Button color={'bg-white px-10'}>Register</Button></Link>
                <Link to='/login'><Button color={'bg-sky-400 border-sky-400 px-10'}>Login</Button></Link>
              </div>
            </div>
            <div className='hidden lg:flex justify-between items-center h-full  '>
                <label onClick={() => {
                  landingRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}>Logo</label>
                <div className='flex justify-end gap-3 items-center'>
                  <label onClick={() => {
                    finderRef.current?.scrollIntoView({behavior: 'smooth'});
                  }}>Finder Tools</label>
                  <label onClick={() => {
                    partnerRef.current?.scrollIntoView({behavior: 'smooth'});
                  }}>Out Partners</label>
                  <label onClick={() => {
                    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
                  }}>About Us</label>
                  <label onClick={() => {
                    contactRef.current?.scrollIntoView({behavior: 'smooth'});
                  }}>Contact</label>
                  <label onClick={() => {
                    faqRef.current?.scrollIntoView({behavior: 'smooth'})
                  }}>FAQs</label>
                  <Link to='/register'><Button color={'bg-white px-10'}>Register</Button></Link>
                  <Link to='/login'><Button color={'bg-sky-400 border-sky-400 px-10'}>Login</Button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopNav