import React from 'react';

const HomeSection = () => {
  return (
    <div className="bg-gray-100 mt-8">
      {/* Top Banner Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern Home Construction"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">
              Set New Standards in <br /> Modern Home Construction
            </h2>
          </div>
        </div>
      </div>

      {/* Dream It, Build It Section */}
      <div className="flex flex-col items-center mt-16 px-5">
        <h3 className="text-3xl font-bold">If you can dream it, we can build it.</h3>
        <p className="text-gray-600 text-center mt-4">
          We adopt a uniquely personalized perspective to each project to deliver maximum spaces of optimal function. <br />
          Renowned for our architectural understanding and material craftsmanship.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Get in touch
        </button>
        
        {/* Image section next to the text */}
        <div className="flex justify-around items-center w-full mt-10">
          <img
            src="https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House 1"
            className="w-[300px] h-[200px] rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1587409968489-06c9d654dde7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House 2"
            className="w-[300px] h-[200px] rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Timeless Inclusions Section */}
      <div className="relative w-full h-[400px] mt-16">
        <img
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Kitchen Inclusions"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold">Our Timeless Inclusions</h3>
            <p className="text-gray-300 mt-4">
              We’ve been creating dream homes that our clients are thrilled to call their own. <br />
              Delighting them with hand-picked finishes, accessories, and accents.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg">
              View Inclusions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
