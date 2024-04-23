import React from 'react';
import styles from './components.module.css'; // Assuming you have a CSS module for styles

function SideBar(props) {
  // Calculate the width dynamically based on isOpen
  const width = props.isOpen ? '250px' : '0px';
  // Calculate the transition duration based on isOpen
  const transitionDuration = props.isOpen ? '0.5s' : '0.3s';

  const [landingRef, finderRef, partnerRef, aboutRef, contactRef, faqRef] = props.references;
  const toggleSidebar = props.toggleSidebar;
  return (
    <>
      <div
        className='fixed z-50 bg-slate-100 h-screen overflow-hidden'
        id={styles.SideBar}
        style={{
          width: width,
          transition: `width ${transitionDuration} ease-in-out`
        }}
      >
        <ul className='p-4 space-y-5 w-60'>
          <li onClick={() => {
            toggleSidebar();
            finderRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}>Finder Tools</li>
          <li onClick={() => {
            toggleSidebar();
            partnerRef.current?.scrollIntoView({behavior: 'smooth'});
          }}>Our Partner</li>
          <li onClick={() => {
            toggleSidebar();
            aboutRef.current?.scrollIntoView({behavior: 'smooth'});
          }}>About Us</li>
          <li onClick={() => {
            toggleSidebar();
            contactRef.current?.scrollIntoView({behavior: 'smooth'});
          }}>Contact</li>
          <li onClick={() => {
            toggleSidebar();
            faqRef.current?.scrollIntoView({behavior: 'smooth'});
          }}>FAQs</li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
