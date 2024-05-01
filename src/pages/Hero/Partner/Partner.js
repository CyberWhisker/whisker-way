import React from 'react';
import BG from '../images/bg.png';
import Pet from '../images/WEB_4.png';
import data from './data.json';
import { motion } from 'framer-motion';

const slideAnimation = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index
      }
    })
}

function Partner() {
  return (
    <>
        <div className='rounded-2xl bg-cover bg-no-repeat relative shadow-2xl shadow-black' style={{backgroundImage: `url(${BG})`}}>
            <div className='grid lg:grid-cols-2 justify-center items-center'>
                <img className='hidden lg:block' src={Pet} alt='Pet' style={{height: '400px'}}/>
                <div className='mt-5'>
                    <h1 className='font-extrabold text-4xl text-white p-5'>Our Partner Shelters and Vets</h1>
                    <div className='p-5'>
                        <List/>
                    </div>
                </div>
                <img className='lg:hidden' src={Pet} alt='Pet' style={{height: '400px'}}/>
            </div>
        </div>
    </>
  )
}

function List() {
    const dataList = data;
    return(
        <>    
            <ul className='grid grid-cols-2 gap-5 text-white mt-5 text-lg font-bold'>
                {dataList.map((item, index) => (
                    <motion.li className='flex items-center' key={index}
                        variants={slideAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                    >
                        <div className='bg-black h-10 w-10'></div>
                        <a href='#' className='ml-3'>{item.title}</a>
                    </motion.li>
                ))}
            </ul>
        </>
    )
}

export default Partner