import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Blogsample from './Blogsample'
const Allcomponent = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen  '>

       <Navbar />
       <Homepage />
       <Blogsample />
    </div>
  )
}

export default Allcomponent