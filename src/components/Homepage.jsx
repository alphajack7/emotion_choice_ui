import React, { useRef } from 'react';

const Homepage = () => {
  const containerRef = useRef();
  const circleRef = useRef();

  const handleMove = (e) => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const radius = 125; // circle size is 250px
    circle.style.transform = `translate(${x - radius}px, ${y - radius}px)`;
  };

  const handleLeave = () => {
    circleRef.current.style.transform = 'translate(-9999px, -9999px)';
  };

  return (
    <div className='w-full min-h-[90%] md:h-[90%] px-5 py-2.5'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* ✅ This must be relative so circle is positioned inside it */}
        <div
          className='relative z-0'
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className='cursor-pointer shadow-2xl p-5 rounded-2xl break-words bg-white'>
            <h1 className='text-7xl font-bold my-3 text-center bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
              Emotions Choice
            </h1>
            <h2 className='font-bold text-2xl mb-3 text-center bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
              A space where motivation meets spirituality.
            </h2>
            <p className='text-center text-xl bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>
              Find powerful thoughts, calming insights, and daily inspiration to help you grow, heal, and move forward.
            </p>
          </div>

          {/* ✅ Circle follows mouse within this container */}
          <div
            ref={circleRef}
            className='rounded-full bg-orange-400 w-[150px] h-[150px] absolute top-0 left-0 -z-10 pointer-events-none transition-transform duration-75 blur-2xl opacity-70'
            style={{ transform: 'translate(-9999px, -9999px)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
