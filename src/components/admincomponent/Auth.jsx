import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
const Auth = ({children}) => {
    const islog=useSelector((state)=>state.auth.isLoggedIn)
  return (
    <div className='w-full h-full'>{islog?children:<Login/>}</div>
  )
}

export default Auth