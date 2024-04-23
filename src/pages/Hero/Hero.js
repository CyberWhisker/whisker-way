import React, { useRef, useState } from 'react'
import Landing from './Landing'
import { SideBar, TopNav } from './components'
import { Finder } from './Finder'
import Partner from './Partner/Partner'
import { About } from './About'
import { Contact } from './Contact'
import { Faq } from './Faq'
import { Footer } from './Footer'

function Hero() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  }
  const landingRef = useRef();
  const finderRef = useRef();
  const partnerRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const faqRef = useRef();
  return (
    <>
      <section>
        <TopNav toggleSidebar={toggleSidebar} references={[landingRef, finderRef, partnerRef, aboutRef, contactRef, faqRef]}/>
      </section>
      <section>
        <SideBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} references={[landingRef, finderRef, partnerRef, aboutRef, contactRef, faqRef]}/>
      </section>
      <section ref={landingRef} style={{marginTop: '4.7%'}}>
        <Landing/>
      </section>
      <section ref={finderRef} className='px-5 lg:px-52 mt-10'>
        <Finder/>
      </section>
      <section ref={partnerRef} className='px-5 lg:px-20 mt-10'>
        <Partner/>
      </section>
      <section ref={aboutRef} className='px-5 lg:px-20 mt-20'>
        <About/>
      </section>
      <section ref={contactRef} className='px-5 lg:px-20 mt-10'>
        <Contact/>
      </section>
      <section ref={faqRef} className='px-5 lg:px-20 mt-10'>
        <Faq/>
      </section>
      <section className='mt-10 lg:mt-0'>
        <Footer/>
      </section>
    </>
  )
}

export default Hero