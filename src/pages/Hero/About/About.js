import React from 'react';
import BG from '../images/bg.png';
import Pet from '../images/WEB_5.png'
import styles from './About.module.css'

function About() {
  return (
    <>
        <div id={styles.About}>
            <div className='flex justify-center'>
                <h1>About Us</h1>
            </div>
            <div className='p-3 mt-10'>
                <p>At Whisker Way, we're not just in the business of finding homes for animals - we're passionate advocates for the well-being of every pet in our care, Founded on the belief that every animal derves a loving family and a safe place to call home, we've dedicated ourselves to making that vision a reality</p>
            </div>
            <div className='grid lg:grid-cols-2 p-3 gap-10 mt-10'>
                <div className='space-y-8'>
                    <h2>Our Mission</h2>

                    <p className=''>Our Mission is simple yer profound: to rescue, rehablilitate, and rehome pets in need. We work tirelessly to provide, neglected, or surrendered, giving them the opportunity to thrive in a loving and nurturing environment.</p>

                    <h2>Our Vision</h2>

                    <p className=''>We envision a world where every pet finds a loving home and experiences the care they deserve. Through our commitment to rescue, rehabilitation, and rehoming, we strive to create a community where every animal is cherished and nurtured. Together, we're building a brighter future for pets in need.</p>
                </div>
                <div className='bg-cover bg-no-repeat rounded-md relative h-72' style={{backgroundImage: `url(${BG})`}}>
                    <img className='absolute -top-44 right-0 lg:right-16' src={Pet} style={{height: '500px'}} alt='pet'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default About