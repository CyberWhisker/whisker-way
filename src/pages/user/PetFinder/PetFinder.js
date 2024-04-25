import React, { useEffect } from 'react'
import petImg from './images/pet.svg'
import locationImg from './images/location.svg'
import homeImg from './images/home.svg'
import dogImg from './images/dog.png'
import { Footer } from '../Footer'
import { Link } from 'react-router-dom'
import PetList from './petlist.json';

function PetFinder() {
    const petList = PetList;
  return (
    <>
        <div className='px-32'>
            <section className='mt-5'>
                <Form/>
            </section>
            <section className='mt-5 grid grid-cols-4 gap-3 px-20'>
                {petList.map((item, index) => (
                    <Card key={index} id={item._id} image={dogImg}>
                        <div className='mt-2'>
                            <label className= "font-extrabold">{item.name}</label>
                            <div className='flex space-x-2'>
                                <label>{item.gender}</label>
                                <label>{item.species}</label>
                            </div>
                        </div>
                        <div className=' border-2 border-sky-300 rounded mt-4'></div>
                        <div className='grid mt-2'>
                            <label>{item.breed}</label>
                            <label>{item.location}</label>
                        </div>
                    </Card>
                ))}
            </section>
        </div>
        <section className='mt-5'>
            <Footer/>
        </section>
    </>
  )
}

function Form() {
    return(
        <form className='grid grid-cols-3 w-full'>
                <div className='flex items-center space-x-3 rounded-l-xl border border-black'>
                    <img src={homeImg} alt='alt'/>
                    <Input name={'name'} placeholder={'Enter your ZIP code'}/>
                </div>
                <div className='flex items-center space-x-3 border border-black'>
                    <img src={locationImg} alt='alt'/>
                    <Input name={'name'} placeholder={'Enter radius'}/>
                </div>
                <div className='flex items-center space-x-3 rounded-r-xl border border-black'>
                    <img src={petImg} alt='alt'/>
                    <div className='pr-5 w-full'>
                        <Select/>
                    </div>
                </div>
        </form>
    )
}

function Input(props) {
    return (
        <input className='bg-slate-100' type='text' name={props.name} placeholder={props.placeholder}/>
    )
}

function Select(props) {
    return (
        <select className='w-full bg-slate-100 border-1 rounded-sm' name={props.name} defaultValue=''>
            <option value='' disabled>Select pet preference</option>
            {/* Add other options here */}
        </select>
    )
}


function Card(props) {
    return(
        <Link to={`details/${props.id}`}>
            <div className={`rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 w-full shadow-lg relative shadow-slate-400 cursor-pointer hover:-translate-y-4 transition`}>
                <div className='h-32 bg-slate-700 rounded'>
                    <img className='w-full h-full' src={props.image} alt='img'/>
                </div>
                {props.children}
            </div>
        </Link>
    )
}

export default PetFinder