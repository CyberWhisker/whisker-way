import React from 'react'
import Landing from './Landing'
import { TopNav } from './components'
import { Finder } from './Finder'
import Partner from './Partner/Partner'
import { About } from './About'
import { Contact } from './Contact'

function Hero() {
  return (
    <>
      <section>
        <TopNav/>
      </section>
      <section>
        <Landing/>
      </section>
      <section className='px-20'>
        <Finder/>
      </section>
      <section className='px-20 mt-10'>
        <Partner/>
      </section>
      <section className='px-20 mt-10'>
        <About/>
      </section>
      <section className='px-20 mt-10'>
        <Contact/>
      </section>
    </>
  )
}

export default Hero