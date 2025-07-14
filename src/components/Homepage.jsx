import React, { useRef } from 'react';

const Homepage = () => {
  const containerRef = useRef();
  const circleRef = useRef();

  const CIRCLE_SIZE = 100;

  const handleMove = (e) => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Show the circle when moving
    circle.style.display = 'block';
    circle.style.transition = 'transform 80ms cubic-bezier(0.4,0,0.2,1)';
    circle.style.transform = `translate(${x - CIRCLE_SIZE / 2}px, ${y - CIRCLE_SIZE / 2}px) scale(1.12)`;
  };

  const handleLeave = () => {
    const circle = circleRef.current;
    // Hide the circle completely when leaving
    circle.style.display = 'none';
  };

  return (
    <div
      className="w-full min-h-[90%] md:h-[90%] px-5 py-2.5 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      style={{
        backgroundImage: 'url(/main.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="relative z-0 group"
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="cursor-pointer shadow-2xl p-6 rounded-[1.5rem] break-words backdrop-blur-lg transition-all duration-200">
            <h1 className="text-6xl md:text-6xl font-extrabold my-3 text-center bg-gradient-to-r from-purple-600 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
              Emotions Choice
            </h1>
            <h2 className="font-bold text-1xl md:text-3xl mb-4 text-center bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
              A space where motivation meets spirituality.
            </h2>
            <p className="text-center text-0.5xl md:text-1xl bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent mb-2">
              Find powerful thoughts, calming insights, and daily inspiration to help you grow, heal, and move forward.
            </p>
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-pink-200/40 transition-all duration-200">
                Get Inspired
              </button>
            </div>
          </div>
          <div
            ref={circleRef}
            className="rounded-full absolute top-0 left-0 -z-10 pointer-events-none transition-transform duration-150 blur-3xl opacity-80"
            style={{
              display: 'none',
              width: `${CIRCLE_SIZE}px`,
              height: `${CIRCLE_SIZE}px`,
              background: 'radial-gradient(circle at 40% 40%, #6111c2ff 60%, #f472b6 100%)',
              boxShadow: '0 0 80px 20px #f472b6, 0 0 120px 40px #fbbf24, 0 0 200px 80px #a78bfa',
              transform: `translate(50%, 50%) scale(1)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
