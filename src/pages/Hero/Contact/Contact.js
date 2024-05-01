import React from 'react';
import { Button, Input } from '../../../components';
import Styles from './Contact.module.css';
import Email from './images/email.svg';
import Phone from './images/phone.svg';
import Web from './images/web.svg';
import Location from './images/location.svg';
import data from './data.json';
import { motion } from 'framer-motion';

const partnerList = data;

const slideAnimation = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 * index
      }
    })
}


function Contact() {
  return (
    <>
        <div id={Styles.Contact}>
            <div className='flex justify-center'>
                <h1>Contact Us</h1>
            </div>
            <div className='lg:px-28 mt-10'>
                <div>
                    <Form/>
                </div>
                <div className='mt-10'>
                    <List/>
                </div>
            </div>
        </div>
    </>
  )
}

function Form() {
    return (
        <>
            <form className='space-y-2'>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div>
                        <label>Your Name:</label>
                        <Input name={'name'} text={'Enter Name'}/>
                    </div>
                    <div>
                        <label>Your Email:</label>
                        <Input name={'name'} text={'Enter Name'}/>
                    </div>
                </div>
                
                <div>
                    <label>Subject:</label>
                    <Input name={'name'} text={'Enter Name'}/>
                </div>
                <div>
                    <label>Message:</label>
                    {/* <Input name={'name'} text={'Enter Name'}/> */}
                    <textarea className='w-full border-2 border-black rounded-md h-24'></textarea>
                </div>
                <div className='w-full px-24'>
                    <Button color={'bg-sky-700 text-white mt-5'}>Send Message</Button>
                </div>
            </form>
        </>
    )
}

function List() {
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-x-28 gap-y-4'>
                {partnerList.map((partner, index) => (
                    <motion.div key={index}
                        variants={slideAnimation}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{
                            once: true
                        }}
                    >
                        <Card>
                            <div className='mb-10'>
                                <label>{partner.title}</label>
                            </div>
                            <div className='space-y-5'>
                                <div className='flex'>
                                    <span>
                                        <img src={Phone} alt='icon'/>
                                    </span>
                                    <p>{partner.phone}</p>
                                </div>
                                <div className='flex'>
                                    <span>
                                        <img src={Email} alt='icon'/>
                                    </span>
                                    <p>{partner.email}</p>
                                </div>
                                <div className='flex'>
                                    <span>
                                        <img src={Location} alt='icon'/>
                                    </span>
                                    <p>{partner.address}</p>
                                </div>
                                <div className='flex'>
                                    <span>
                                        <img src={Web} alt='icon'/>
                                    </span>
                                    <p>{partner.web}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

function Card(props) {
    return (
        <>
            <div className={Styles.Card}>
                {props.children}
            </div>
        </>
    )
}


export default Contact