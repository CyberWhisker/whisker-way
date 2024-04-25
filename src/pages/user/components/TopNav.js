import React, { useState } from 'react';
import styles from './components.module.css';
import { Link, useLocation } from 'react-router-dom';
import Bar from './images/bar.svg';
import userImg from './images/user.svg';
import Vector1 from './images/Vector1.svg'
import Vector2 from './images/Vector2.svg'
import Vector3 from './images/Vector3.svg'
import Vector4 from './images/Vector4.svg'

function TopNav({toggleSidebar}) {
  return (
    <>
        <div id={styles.TopNav}>
            <div className='lg:hidden flex justify-between items-center'>
              <div className='h-full flex item-center p-4'>
                <img className='size-10 cursor-pointer' src={Bar} alt='bar' onClick={toggleSidebar}/>
              </div>
              <div className='flex space-x-3 pr-4'>
                    <label>Username</label>
                    <img src={userImg} alt='img'/>
              </div>
            </div>
            <div className='hidden lg:flex justify-between items-center h-full  '>
                <div>
                    <Link to={'/'}>
                        <label>Logo</label>
                    </Link>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex space-x-3'>
                        <NavList image={Vector4} to={'/user'}>Pet Finder</NavList>
                        <NavList image={Vector3}>Pet Dating</NavList>
                        <NavList image={Vector2}>Vet Clinic Locator</NavList>
                        <NavList image={Vector1}>Community Forum</NavList>
                    </div>
                    {/* User Here */}
                    <div className='flex space-x-2 items-center'>
                        <label>Username</label>
                        <img src={userImg} alt='img'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

function NavList({ image, to, children }) {
    const location = useLocation();
    return (
      <Link to={to} className={`hover:bg-white py-2 px-4 rounded-lg flex space-x-2 ${location.pathname == to ? 'bg-white' : ''}`}>
        <img src={image} alt='img' />
        <span>{children}</span>
      </Link>
    );
  }

export default TopNav