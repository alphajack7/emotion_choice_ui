import React from 'react'
import Navbar from './usercomponent/Navbar'
import Homepage from './usercomponent/Homepage'
import Blogsample from './usercomponent/Blogsample'
import Email from './usercomponent/Email'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Blog from './usercomponent/Blog'
import Login from './admincomponent/Login'
import Dashboard from './admincomponent/Dashboard'
import Auth from './admincomponent/Auth'
const Allcomponent = () => {
  return (
    <div className='w-screen min-h-screen md:h-screen  '>

       
       <BrowserRouter>
       <Routes>
        
        <Route path='/' element={ <div  className='w-screen min-h-screen md:h-screen relative  '><Navbar /><Homepage />
       <Blogsample />
       <Email /></div>  } />

        <Route path='/blogs' element={ <div  className='w-screen min-h-screen md:h-screen  '><Navbar /> <Blog /></div>  } />
              <Route path='/admin/login' element={<div className='w-screen min-h-screen md:h-screen'><Login /></div>} />
              <Route path='/admin' element={<div className='w-screen min-h-screen md:h-screen'><Auth><Dashboard /></Auth></div>} />
         
       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default Allcomponent