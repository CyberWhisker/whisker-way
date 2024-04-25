import React from 'react'
import Styles from './Footer.module.css';
import Facebook from './images/facebook.svg';
import Twitter from './images/twitter.svg';
import Instagram from './images/instagram.svg';
import Youtube from './images/youtube.svg';

function Footer() {
  return (
    <>
        <div id={Styles.Footer}>
            <div className={Styles.wave}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={Styles.fill}></path>
                </svg>
            </div>
            <div className='px-5 lg:px-48 grid grid-cols-2 lg:grid-cols-4 gap-x-4 text-center items-center lg:-mt-24 space-y-10 lg:space-y-0' id={Styles.Content}>
                <h1>Whisker Way</h1>
                <p>Create an account</p>
                <p>Log In</p>
                <p>Finder Tools</p>
                <p>©2024, Technotubbies or affiliates.</p>
                <p>Contact Us</p>
                <p>Follow us on</p>
                <div className='flex justify-center space-x-3 items-center'>
                    <span><img src={Facebook} alt='icon'/></span>
                    <span><img src={Twitter} alt='icon'/></span>
                    <span><img src={Instagram} alt='icon'/></span>
                    <span><img src={Youtube} alt='icon'/></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer