import React from 'react';
import { Button, Input } from '../../../components';
import Styles from './Contact.module.css';
import Email from './images/email.svg';
import Phone from './images/phone.svg';
import Web from './images/web.svg';
import Location from './images/location.svg';

const partnerList = [
    {
        title: 'Animal Rescue PH',
        phone: '02-123-4567',
        email: 'animalrescueph@yahoo.com',
        address: '123 Main Street, Quezon City, Metro Manila',
        web: 'animalrescueph.org',
    },
    {
        title: 'Shelter Care PH',
        phone: '02-987-6543',
        email: 'sheltercareph@gmail.com',
        address: '789 Oak Street, Pasig City, Metro Manila',
        web: 'sheltercareph.org',
    },
    {
        title: 'Paw Print PH',
        phone: '02-456-7890',
        email: 'pawprintsph@outlook.com',
        address: '678 Walnut Street, Parañaque City, Metro Manila',
        web: 'pawprintsph.org',
    },
    {
        title: 'Compassionate Vets ',
        phone: '02-789-0123',
        email: 'compassionatevets@yahoo.com',
        address: '890 Birch Street, Manila City, Metro Manila',
        web: 'compassionatevetsph.com',
    },
    {
        title: 'Metro Vet Clinic',
        phone: '02-345-6789',
        email: 'metrovetclinic@outlook.com',
        address: '321 Maple Avenue, Mandaluyong City, Metro Manila',
        web: 'metrovetclinicph.com',
    },
    {
        title: 'Pet Care Clinic',
        phone: '02-876-5432',
        email: 'petcareclinic@gmail.com',
        address: '456 Elm Street, Makati City, Metro Manila',
        web: 'petcareclinicph.com',
    },
    {
        title: 'Vet Solutions',
        phone: '02-890-1234',
        email: 'vetsolutionsph@hotmail.com',
        address: '234 Cedar Street, Marikina City, Metro Manila',
        web: 'vetsolutionsph.com',
    },
    {
        title: 'Metro Animal Clinic PH',
        phone: '02-345-6789',
        email: 'metroanimalclinicph.com',
        address: '567 Pine Street, Taguig City, Metro Manila',
        web: 'metroanimalclinicph.com',
    },
]


function Contact() {
  return (
    <>
        <div id={Styles.Contact}>
            <div className='flex justify-center'>
                <h1>Contact Us</h1>
            </div>
            <div className='px-28 mt-10'>
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
                <div className='grid grid-cols-2 gap-4'>
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
            <div className='grid grid-cols-2 gap-x-28 gap-y-4'>
                {partnerList.map((partner, index) => (
                    <div key={index}>
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
                    </div>
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