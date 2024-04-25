import React, { useState } from 'react'
import { TopNav } from './components'
import { PetFinder } from './PetFinder'

function User() {
  return (
    <>
        <section className='w-screen h-full'>
            <TopNav/>
        </section>
        <section className='w-screen h-full'>
            <PetFinder/>
        </section>
    </>
  )
}

export default User