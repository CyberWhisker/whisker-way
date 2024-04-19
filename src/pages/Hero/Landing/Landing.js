import React from 'react';
import styles from './Landing.module.css';
import pet1 from '../images/WEB_1.png';
import pet2 from '../images/WEB_2.png';
import pet3 from '../images/WEB_6.png';
import { Card, Button } from '../../../components';
import paw from '../images/paw.png';

function Landing() {
  return (
    <>
      <div class={styles.curveTop}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class={styles.shape}></path>
        </svg>
      </div>

      <div className=' h-96' id={styles.Landing}>
        <div className='grid grid-cols-2 h-full'>
          <div className='pl-32'>
            <h1 className='font-extrabold text-5xl text-white' style={{marginTop: '40px'}}>Whisker Way</h1>
            <br/>
            <section>
              <label className='font-medium text-white'>At Whisker Way, we believe in creating forever homes for our furry friends. Every pet deserves a loving family, and we're here to make that connection happen. Whether you're lokking for a playful pup to romp around with or a cuddly companion to keep you company, we have the perfect match waiting for you.</label>
            </section>
            <Button color={'bg-slate-100 mt-5'}><span className='font-bold'>Adopt a pet</span></Button>
          </div>
          <div className='relative overflow-hidden'>
            <img className='bottom-0 absolute h-80 right-52' src={pet2}/>
            <img className='-bottom-36 -right-16 absolute h-92' src={pet3}/>
          </div>
        </div>
        <img className='absolute -top-28' src={pet1} style={{right: '370px'}}/>
      </div>
      
      <div className='flex justify-center font-extrabold text-2xl mt-10'>
        <h1>Why Adopt us?</h1>
      </div>

      <section className='px-20' id={styles.Content}>
        <div className='grid grid-cols-4 gap-3 mt-4'>
          <Content/>
        </div>
      </section>
    </>
  )
}

function Content() 
{
  return (
    <>
    <Card style={'h-60 bg-blue-200 px-8'}>
      <div className='flex justify-center'>
        <label className='font-bold text-lg w-max'>Life-Saving Mission</label>
      </div>
      <p>By choosing to adopt from us, you're not just bringing home a pet, our animals come from shelters or rescue groups, giving them a secod chance at happiness.</p>
    </Card>
    <Card style={'h-60 bg-blue-200 px-8'}>
      <div className='flex justify-center'>
        <label className='font-bold text-lg w-max'>Variety of Pets</label>
      </div>
      <p>From playful puppies and kittens to seasoned seniors, we have a wide range of pets available for adoption, we're confident we can find the perfect match for you.</p>
    </Card>
    <Card style={'h-60 bg-blue-200 px-8'}>
      <div className='flex justify-center'>
        <label className='font-bold text-lg w-max'>Health and Wellness</label>
      </div>
      <p>Each of our pets receives thorough medical care including vaccinations, spaying/neutering, and any nessary treatments.</p>
    </Card>
    <Card style={'h-60 bg-blue-200 px-8'}>
      <div className='flex justify-center'>
        <label className='font-bold text-lg w-max'>Support and Guidance</label>
      </div>
      <p>Our team here to support you every step of the way, from choosing the right pet for your family to providing tips and resources for successful integration into your home.</p>
    </Card>
    </>
  )
}

export default Landing