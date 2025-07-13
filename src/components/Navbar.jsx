import React, { useState, useEffect,useRef } from 'react'
const Navbar = () => {
  const [menuVisibility,setMenuVisibilty]=useState(false)
  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <nav className='  bg-gradient-to-b from-pink-200 to-white shadow-md"  px-2'>
      <div className='  px-2.5 py-1.5 flex justify-between items-center'>
        <div>
        <p className='text-3xl font-bold'>Emotions Choice</p>
      </div>
      {/* desktop menu */}
      <div className=' hidden md:flex gap-8 text-xl'>
       <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
      </div>
      
      <div className=' flex items-center gap-2'>
        <div className='inline-block md:hidden'>
        <img src={menuVisibility?"cross.svg":"menu.svg"} onClick={(()=>{
          setMenuVisibilty((v)=>!v)
        })} className='w-[30px]' alt="" />
      </div>
       
      <div className='hidden md:block rounded-2xl bg-white px-2.5 py-0.5 border-2 border-black'>
        <input type="text" ref={searchRef} className='w-[200px] outline-0 ' placeholder='ctrl+k' />
        <input type="submit" value="Search" />
      </div>
       <div className=''>
          
       <input type="checkbox" className='appearance-none w-[60px] h-[25px] rounded-2xl bg-gray-300 checked:bg-blue-400' />

      </div>
      </div>
      </div>
      {/* mobile menu */}
     {menuVisibility &&  <div className=' md:hidden flex flex-col items-center gap-2'>
      <div className=' rounded-2xl bg-white px-2.5 py-0.5'>
        <input type="text" className='w-[200px] outline-0 ' placeholder='ctrl+k' />
        <input type="submit" value="Search" />
      </div>
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
      </div>}
    </nav>
  )
}

export default Navbar