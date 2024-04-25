import React from 'react';
import { useParams } from 'react-router-dom';
import PetList from '../petlist.json';
import { TopNav } from '../../components';
import { Footer } from '../../Footer';

function Details() {
  const { id } = useParams();
  const petList = PetList;
  const pet = petList.find(item => item._id == id);
  return (
    <>
      <div className='h-screen'>
        <section>
          <TopNav/>
        </section>
        <section className='mt-5 px-48 grid grid-cols-2 space-x-5'>
          <Card></Card>
          <Card2>
            <div className='grid space-y-2'>
              <label className='font-extrabold text-3xl'>{pet.name ? pet.name : 'No Record found'}</label>
              <label>{pet.description ? pet.description : 'No Record found'}</label>
              <div className='flex space-x-3'>
                <label className='font-bold'>Type: </label><label>{pet.species ? pet.species : 'No Record found'}</label>
              </div>
              <div className='flex space-x-3'>
                <label className='font-bold'>Gender: </label><label>{pet.gender ? pet.gender : 'No Record found'}</label>
              </div>
              <div className='flex space-x-3'>
                <label className='font-bold'>Breed: </label><label>{pet.breed ? pet.breed : 'No Record found'}</label>
              </div>
              <div className='flex space-x-3'>
                <label className='font-bold'>Age (in months): </label><label>{pet.age ? pet.age : 'No Record found'}</label>
              </div>
              <div className='flex space-x-3'>
                <label className='font-bold'>Personality: </label><label>{pet.personality ? pet.personality : 'No Record found'}</label>
              </div>
            </div>
          </Card2>
        </section>
        <section className='absolute bottom-0'>
          <Footer/>
        </section>
      </div>
    </>
  );
}

function Card(props) {
  return(
    <div className={`rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 w-full shadow-lg relative shadow-slate-400`}>
      <div className=' h-60 rounded'>
        <img className='w-full h-full' src={props.image} alt='img'/>
      </div>
    </div>
  )
}
function Card2(props) {
  return(
    <div className={`rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 w-full shadow-lg relative shadow-slate-400`}>
      {props.children}
    </div>
  )
}

export default Details;
