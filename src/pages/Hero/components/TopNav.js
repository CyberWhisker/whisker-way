import React from 'react';
import styles from './components.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../components';

function TopNav() {
  return (
    <>
        <div id={styles.TopNav}>
            <div className='flex justify-between items-center'>
                <Link to='/'><b>Logo</b></Link>
                <div className='flex justify-end gap-3 items-center'>
                    <Link to='/finder'><b>Finder Tools</b></Link>
                    <Link to='/partner'><b>Out Partners</b></Link>
                    <Link to='/about'><b>About Us</b></Link>
                    <Link to='/contact'><b>Contact</b></Link>
                    <Link to='/faq'><b>FAQs</b></Link>
                    <Link to='/register'><Button color={'bg-white px-10'}>Register</Button></Link>
                    <Link to='/login'><Button color={'bg-sky-400 border-sky-400 px-10'}>Login</Button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopNav