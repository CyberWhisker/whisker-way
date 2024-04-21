import React from 'react';
import styles from './Landing.module.css';
import pet1 from '../images/WEB_1.png';
import pet2 from '../images/WEB_2.png';
import pet3 from '../images/WEB_6.png';
import { Card, Button } from '../../../components';

function Landing() {
  return (
    <>
      <div className={styles.curveTop}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className={styles.shape}></path>
        </svg>
      </div>

      <div id={styles.Landing}>
        <div className='grid lg:grid-cols-2 h-full'>
          <div className='px-5 lg:pl-32'>
            <h1 className='mt-28'>Whisker Way</h1>

            <section className='mt-14'>
              <p>At Whisker Way, we believe in creating forever homes for our furry friends. Every pet deserves a loving family, and we're here to make that connection happen. Whether you're lokking for a playful pup to romp around with or a cuddly companion to keep you company, we have the perfect match waiting for you.</p>
            </section>
            <div className='w-40'>
              <Button color={'bg-slate-100 mt-10'}><span className='font-bold'>Adopt a pet</span></Button>
            </div>
            {/* For Smaller Screen */}
            <div className='relative lg:hidden overflow-hidden'>
              <img src={pet2} alt='pet'/>
              <img className='absolute -top-52 -left-32' src={pet1} alt='pet'/>
              <img className='absolute -bottom-32 -right-32' src={pet3} alt='pet'/>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <img className='hidden lg:block bottom-0 absolute right-20' src={pet2} alt='pet'/>
            <img className='hidden lg:block -bottom-44 -right-60 absolute' src={pet3} alt='pet' style={{height: '100%'}}/>
          </div>
          <img className='absolute hidden lg:block' src={pet1} style={{right: '290px', height: '120%', top: '-25%'}} alt='pet'/>
        </div>
      </div>
      
      <div id={styles.LandingContent}>
        <div>
          <h2 className='flex justify-center mt-14'>Why Adopt from us?</h2>
        </div>

        <section>
          <div className='grid lg:grid-cols-4 gap-3 mt-4 py-14 px-28' id={styles.Content}>
            <Content/>
          </div>
        </section>
      </div>
    </>
  )
}

function Content() 
{
  return (
    <>
    <Card style={'bg-sky-200  px-8 space-y-10 pb-16 pt-10'}>
      <div className='flex justify-center'>
        <label>Life-Saving Mission</label>
      </div>
      <p>By choosing to adopt from us, you're not just bringing home a pet, our animals come from shelters or rescue groups, giving them a secod chance at happiness.</p>
    </Card>
    <Card style={'bg-sky-200  px-8 space-y-10 pb-16 pt-10'}>
      <div className='flex justify-center'>
        <label>Variety of Pets</label>
      </div>
      <p>From playful puppies and kittens to seasoned seniors, we have a wide range of pets available for adoption, we're confident we can find the perfect match for you.</p>
    </Card>
    <Card style={'bg-sky-200  px-8 space-y-10 pb-16 pt-10'}>
      <div className='flex justify-center'>
        <label>Health and Wellness</label>
      </div>
      <p>Each of our pets receives thorough medical care including vaccinations, spaying/neutering, and any nessary treatments.</p>
    </Card>
    <Card style={'bg-sky-200  px-8 space-y-10 pb-16 pt-10'}>
      <div className='flex justify-center'>
        <label>Support and Guidance</label>
      </div>
      <p>Our team here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home.</p>
    </Card>
    </>
  )
}

export default Landing