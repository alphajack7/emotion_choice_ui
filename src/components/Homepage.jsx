import React, { useRef } from 'react';

const Homepage = () => {
  const containerRef = useRef();
  const circleRef = useRef();

  const CIRCLE_SIZE = 150;

  const handleMove = (e) => {
    const container = containerRef.current;
    const circle = circleRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Center the circle on the cursor, increase scale for faster effect
    circle.style.transition = 'transform 80ms cubic-bezier(0.4,0,0.2,1)';
    circle.style.transform = `translate(${x - CIRCLE_SIZE / 2}px, ${y - CIRCLE_SIZE / 2}px) scale(1.12)`;
  };

  const handleLeave = (e) => {
    const circle = circleRef.current;
    // Only reduce the size, keep the current position
    const currentTransform = circle.style.transform;
    const match = currentTransform.match(/translate\([^)]+\)/);
    const translatePart = match ? match[0] : '';
    circle.style.transition = 'transform 180ms cubic-bezier(0.4,0,0.2,1)';
    circle.style.transform = `${translatePart} scale(0.8)`;
  };

  return (
    <div
      className="w-full min-h-[90%] md:h-[90%] px-5 py-2.5  bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      style={{
        backgroundImage: 'url(/5037782.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropblur:'blur(20px)',
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          className="relative z-0 group"
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="cursor-pointer shadow-2xl p-6 rounded-[1.5rem] break-words bg-white/80 backdrop-blur-xl border border-purple-200 transition-all duration-200 group-hover:scale-105 group-hover:shadow-purple-200/40">
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