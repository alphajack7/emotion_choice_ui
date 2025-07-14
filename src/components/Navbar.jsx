import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuVisibility, setMenuVisibilty] = useState(false)
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

  // Color palette:
  // Purple: #8B5CF6
  // Orange: #F59E42

  const palette = "purple-orange";
  const paletteClasses = {
    gradient: "bg-gradient-to-r from-orange-300 via-purple-500 to-orange-300",
    accent: "text-purple-700",
    border: "border-purple-700",
    bgSwitch: "bg-purple-200 checked:bg-purple-500",
    inputText: "text-purple-700",
    button: "text-purple-700",
    icon: <span className="inline-block w-5 h-5 rounded-full" style={{ background: "linear-gradient(90deg,#F59E42,#8B5CF6,#F59E42)" }}></span>
  };

  // Animated gradient styles
  const animatedGradient = {
    background: "linear-gradient(90deg,#F59E42,#8B5CF6,#F59E42)",
    backgroundSize: "200% 200%",
    animation: "gradientMove 8s linear infinite"
  };

  // Add keyframes for gradient animation only once
  useEffect(() => {
    if (!document.getElementById("gradientMoveKeyframes")) {
      const style = document.createElement("style");
      style.id = "gradientMoveKeyframes";
      style.innerHTML = `
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <nav
      className={` w-full shadow-md px-2 sticky top-0 left-0`}
      style={animatedGradient} 
    >
      <div className='px-2.5 py-1.5 flex justify-between items-center'>
        <div>
          <p className={`text-3xl font-bold ${paletteClasses.accent}`}>Emotions Choice</p>
        </div>
        {/* desktop menu */}
        <div className='hidden md:flex gap-8 text-xl text-white'>
          <Link to='/'>Home</Link>
           <Link to="/blogs">Blog</Link>
          <a href="">About Us</a>
          <a href="">Contact</a>
        </div>
        <div className='flex items-center gap-2'>
          <div className='inline-block md:hidden'>
            <img src={menuVisibility ? "cross.svg" : "menu.svg"} onClick={() => {
              setMenuVisibilty((v) => !v)
            }} className='w-[30px]' alt="" />
          </div>
          <div className={`hidden md:block rounded-2xl bg-white px-2.5 py-0.5 border-2 ${paletteClasses.border}`}>
            <input type="text" ref={searchRef} className={`w-[200px] outline-0 ${paletteClasses.inputText}`} placeholder='ctrl+k' />
            <input type="submit" value="Search" className={paletteClasses.button} />
          </div>
          {/* <div>
            <input
              type="checkbox"
              className={`appearance-none w-[60px] h-[25px] rounded-2xl ${paletteClasses.bgSwitch}`}
              checked={false}
              readOnly
            />
          </div> */}
        </div>
      </div>
      {/* mobile menu */}
      {menuVisibility && <div className='md:hidden flex flex-col items-center gap-2'>
        <div className={`rounded-2xl bg-white px-2.5 py-0.5 border-2 ${paletteClasses.border}`}>
          <input type="text" className={`w-[200px] outline-0 ${paletteClasses.inputText}`} placeholder='ctrl+k' />
          <input type="submit" value="Search" className={paletteClasses.button} />
        </div>
         <Link to='/' className={paletteClasses.accent}>Home</Link>
           <Link to="/blogs" className={paletteClasses.accent}>Blog</Link>
        <a href="" className={paletteClasses.accent}>About Us</a>
        <a href="" className={paletteClasses.accent}>Contact</a>
      </div>}
    </nav>
  )
}

export default Navbar
