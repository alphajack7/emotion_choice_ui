import React from 'react';

const Email = () => {
  return (
    <div className="w-full min-h-screen bg-purple-200 px-4 py-10">
      <p className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Drop a Line, Let Me Know What You Think
      </p>

      <div className="w-full flex justify-center">
        <form action="" className="w-full max-w-4xl">
          <div className="flex flex-col items-center gap-6">
            
            {/* First and Last Name */}
            <div className="w-full flex flex-col md:flex-row md:justify-between gap-6">
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="first" className="text-lg md:text-2xl">First Name *</label>
                <input
                  type="text"
                  id="first"
                  className="border-b border-black outline-none bg-transparent py-1"
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="last" className="text-lg md:text-2xl">Last Name *</label>
                <input
                  type="text"
                  id="last"
                  className="border-b border-black outline-none bg-transparent py-1"
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="text-lg md:text-2xl">Email *</label>
              <input
                type="email"
                id="email"
                className="border-b border-black outline-none bg-transparent py-1"
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col">
              <label htmlFor="message" className="text-lg md:text-2xl">Message *</label>
              <textarea
                id="message"
                className="border-b border-black outline-none bg-transparent py-1 h-32 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
