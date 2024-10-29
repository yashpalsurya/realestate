import React from 'react';

const HomeSection = () => {
  return (
    <div className="bg-gray-100 pb-16 mt-7">
      {/* Top Banner Section */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-12">
        <img
          src="https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Home Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl font-semibold leading-tight">
              Set New Standards in <br /> Modern Home Construction
            </h2>
          </div>
        </div>
      </div>

      {/* Dream It, Build It Section */}
      <div className="flex flex-col items-center px-5">
        <h3 className="text-4xl font-semibold text-gray-800">If you can dream it, we can build it.</h3>
        <p className="text-gray-600 text-center mt-4 max-w-3xl leading-relaxed">
          We adopt a uniquely personalized perspective to each project, delivering spaces with optimal function and style.
          Renowned for our architectural expertise and craftsmanship, we bring your dreams to life.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300 shadow-md">
          Get in touch
        </button>
        
        {/* Image section next to the text */}
        <div className="flex flex-wrap justify-around items-center w-full mt-10 gap-6">
          <img
            src="https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House 1"
            className="w-[280px] h-[180px] rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1587409968489-06c9d654dde7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House 2"
            className="w-[280px] h-[180px] rounded-lg object-cover shadow-md"
          />
        </div>
      </div>

      {/* Timeless Inclusions Section */}
      <div className="relative w-full h-[400px] mt-16 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kitchen Inclusions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h3 className="text-3xl font-semibold">Our Timeless Inclusions</h3>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
              We've been creating dream homes that our clients love. Our work is crafted with hand-picked finishes, elegant accessories, and timeless accents.
            </p>
            <button className="mt-6 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 shadow-md">
              View Inclusions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
