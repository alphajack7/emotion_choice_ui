import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Blogsample from './Blogsample'
import Email from './Email'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Blog from './Blog'
const Allcomponent = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen  '>

       
       <BrowserRouter>
       <Routes>
        
        <Route path='/' element={ <div  className='w-screen min-h-screen md:h-screen relative  '><Navbar /><Homepage />
       <Blogsample />
       <Email /></div>  } />

        <Route path='/blogs' element={ <div  className='w-screen min-h-screen md:h-screen  '><Navbar /> <Blog /></div>  } />

       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default Allcomponent