import React, { useEffect, useRef, useState } from 'react';
import { Card, Skeleton } from '../../../components';
import PawIcon from '../images/Icons/paw.svg';
import HomeIcon from '../images/Icons/home.svg';
import LocationIcon from '../images/Icons/location.svg';
import FindIcon from '../images/Icons/find.svg';

function Finder() {
    const [openRadius, setOpenRadius] = useState(false);
    const [openTool, setOpenTool] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpenRadius(false);
          setOpenTool(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);
  return (
    <>
        <div className='flex justify-center'>
            <h1 className='font-extrabold text-2xl'>Finder Tool</h1>
        </div>      
        <div className='mt-5'>
        <section className='flex justify-center '>
          <div className={`border-2 border-slate-400 w-full p-1 text-left flex rounded-bl-md rounded-tl-md`}>
            <img className='h-7' src={HomeIcon} alt='icon'/>
            <input type='text' className='bg-slate-100 ml-3' placeholder='Enter your ZIP code' />
          </div>
          
          <div className='dropdown w-full relative' ref={dropdownRef}>
            <button type='button' className='border-2 border-slate-400 w-full p-1 text-left flex' onClick={() => {setOpenRadius(!openRadius); setOpenTool(false)}}>
              <img className='h-7' src={LocationIcon} alt='icon'/>
              <label className='ml-2'>Select Radius</label>
            </button>
            <div className={`z-10 bg-white dropdown-menu w-full rounded-md mt-1 border-slate-400 border-2 p-3 ${openRadius ? 'active' : 'inactive'}`}>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
            </div>
          </div>
          <div className='dropdown w-full relative' ref={dropdownRef}>
            <button className={`border-2 border-slate-400 w-full p-1 text-left flex`} onClick={() => {setOpenTool(!openTool); setOpenRadius(false)}}>
              <img className='h-7' src={PawIcon} alt='icon'/>
              <label className='ml-2'>Select Tools</label>
            </button>
            <div className={`z-10 bg-white dropdown-menu w-full rounded-md mt-1 border-slate-400 border-2 p-3 ${openTool ? 'active' : 'inactive'}`}>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
              <DropDownItem>test</DropDownItem>
            </div>
          </div>
          <button className={`border-2 border-slate-400 w-28 p-1 text-left flex rounded-br-md rounded-tr-md`}>
            <img className='h-7' src={FindIcon} alt='icon'/>
          </button>
        </section>
        <section className='mt-10 grid grid-cols-4 gap-4'>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
          <Card>
            <Skeleton/>
          </Card>
        </section>
      </div> 
    </>
  )
}

function DropDownItem(props) {
    return (
      <ul>
        <li>{props.children}</li>
      </ul>
    )
  }

export default Finder