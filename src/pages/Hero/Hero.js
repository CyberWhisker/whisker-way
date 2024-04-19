import React from 'react'
import Landing from './Landing'
import { TopNav } from './components'
import { Finder } from './Finder'

function Hero() {
  return (
    <>
      <section>
        <TopNav/>
      </section>
      <section>
        <Landing/>
      </section>
      <section className='p-4'>
        <Finder/>
      </section>
    </>
  )
}

export default Hero