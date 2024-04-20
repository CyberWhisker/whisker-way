import React, { useState } from 'react'
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
  return (
    <>
      <section>
        <TopNav toggleSidebar={toggleSidebar}/>
      </section>
      {/* <section>
        <SideBar isOpen={isSidebarOpen}/>
      </section> */}
      <section style={{marginTop: '4.7%'}}>
        <Landing/>
      </section>
      <section className='px-52 mt-10'>
        <Finder/>
      </section>
      <section className='px-20 mt-10'>
        <Partner/>
      </section>
      <section className='px-20 mt-20'>
        <About/>
      </section>
      <section className='px-20 mt-10'>
        <Contact/>
      </section>
      <section className='px-20 mt-10'>
        <Faq/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default Hero