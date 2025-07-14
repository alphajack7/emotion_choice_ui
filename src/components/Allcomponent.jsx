import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Blogsample from './Blogsample'
import Email from './Email'
const Allcomponent = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen  '>

       <Navbar />
       <Homepage />
       <Blogsample />
       <Email />
    </div>
  )
}

export default Allcomponent