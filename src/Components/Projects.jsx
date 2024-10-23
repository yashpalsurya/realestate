import React from 'react';
import Footer from './Footer';
import Property2 from './Property2';

const Projects = () => {
  const apartments = [
    {
      title: '1BHK Flat',
      size: '480 sqft',
      image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual 1BHK image
      description: 'Our 1BHK flat is perfect for singles or small families. Compact, modern design with all the essential amenities for comfortable living.',
    },
    {
      title: '2BHK Flat',
      size: '720 sqft',
      image: 'https://plus.unsplash.com/premium_photo-1671269704807-5479855d03fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual 2BHK image
      description: 'Our 2BHK flat offers a spacious living environment, ideal for small families or couples. Thoughtfully designed interiors with premium fittings.',
    },
    {
      title: '3BHK Flat',
      size: '1024 sqft',
      image: 'https://images.unsplash.com/photo-1638454795595-0a0abf68614d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual 3BHK image
      description: 'For growing families, the 3BHK flat provides plenty of space with well-appointed rooms, modern kitchens, and a great living area.',
    },
    {
      title: '4BHK Flat',
      size: '1250 sqft',
      image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Replace with actual 4BHK image
      description: 'Our premium 4BHK flats offer luxurious living with expansive spaces, high-end interiors, and excellent facilities for large families.',
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Welcome to Kailash Pride
      </h1>

      <img
        src="https://plus.unsplash.com/premium_photo-1680281937008-f9b19ed9afb6?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual building image
        alt="Kailash Pride Building"
        className="w-full h-auto object-cover rounded-lg mb-8"
      />

      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Our Apartment Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {apartments.map((apartment, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src={apartment.image}
              alt={apartment.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              {apartment.title} - {apartment.size}
            </h3>
            <p className="text-gray-600 mb-4">{apartment.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Property2/>
    <Footer/>
    </>
  );
};

export default Projects;
