import React, { useEffect, useRef } from 'react';
import styles from './Landing.module.css';
import pet1 from '../images/WEB_1.png';
import pet2 from '../images/WEB_2.png';
import pet3 from '../images/WEB_6.png';
import {Button } from '../../../components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from './data.json';

const slideRightInAnimation = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 * index
    }
  })
}
const slideLeftInAnimation = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index
    }
  })
}

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
            <div className='mt-20 space-y-1 text-white'>
              <motion.h1 
                variants={slideRightInAnimation}
                initial="initial"
                whileInView="animate"
                custom={0}
              >
              Whisker Way</motion.h1>
              <motion.p 
                variants={slideRightInAnimation}
                initial="initial"
                whileInView="animate"
                custom={1}
              >
              At Whisker Way, we believe in creating forever homes for our furry friends. Every pet deserves a loving family, and we're here to make that connection happen. Whether you're lokking for a playful pup to romp around with or a cuddly companion to keep you company, we have the perfect match waiting for you.</motion.p>
            </div>
            <motion.div className='w-40'
              variants={slideRightInAnimation}
              initial="initial"
              whileInView="animate"
              custom={2}
            >
              <Link to='/user'>
                <Button color={'bg-slate-100 mt-10'}><span className='font-bold'>Adopt a pet</span></Button>
              </Link>
            </motion.div>
            {/* For Smaller Screen */}
            <div className='relative lg:hidden overflow-hidden'>
              <img src={pet2} alt='pet'/>
              <img className='absolute -top-52 -left-32' src={pet1} alt='pet'/>
              <img className='absolute -bottom-32 -right-32' src={pet3} alt='pet'/>
            </div>
          </div>
          <div className='relative overflow-hidden'>
            <motion.img className='hidden lg:block bottom-0 absolute right-20' src={pet2} alt='pet'
              variants={slideLeftInAnimation}
              initial='initial'
              whileInView='animate'
              custom={0}
            />
            <motion.img className='hidden lg:block -bottom-44 -right-60 absolute' src={pet3} alt='pet' style={{height: '100%'}}
              variants={slideLeftInAnimation}
              initial='initial'
              whileInView='animate'
              custom={1}
            />
            <motion.img className='absolute hidden lg:block' src={pet1} style={{right: '290px', height: '150%', bottom: '-60px'}} alt='pet'
              variants={slideLeftInAnimation}
              initial='initial'
              whileInView='animate'
              custom={2}
            />
          </div>
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
  const dataList = data;
  return (
    <>
      {dataList.map((item, index) => (
          <motion.div className={styles.Card} key={index}
            variants={slideRightInAnimation}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <div className='flex justify-center'>
              <label>{item.title}</label>
            </div>
            <p>{item.description}</p>
          </motion.div>
      ))}
    
    </>
  )
}

export default Landing