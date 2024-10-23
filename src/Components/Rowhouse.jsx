import React from 'react';

const Rowhouse = () => {
  return (
    <div className="projects-section bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>

      {/* Row House Section */}
      <div className="project-card bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-bold mb-4">Row House</h2>
        <p className="text-lg mb-4">
          Introducing our luxurious Row House, designed to provide both comfort and style for modern families. Each unit offers spacious living areas, private gardens, and parking facilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row House Images */}
          <img
            src="https://images.unsplash.com/photo-1719164136707-bf7c1ead8cbb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path
            alt="Row House"
            className="rounded-lg shadow-lg h-80 w-11/12"
          />
          {/* Row House Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Available Sizes:</h3>
            <ul className="list-disc pl-5">
              <li>1200 sqft - 2 BHK Row House</li>
              <li>1500 sqft - 3 BHK Row House</li>
              <li>1800 sqft - 4 BHK Row House</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-4 mb-2">Features:</h3>
            <ul className="list-disc pl-5">
              <li>Private Parking</li>
              <li>Personal Garden</li>
              <li>24/7 Security</li>
              <li>Community Gym & Pool</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Other Projects like Kailash Pride */}
      <div className="project-card bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">Kailash Pride</h2>
        <p className="text-lg mb-4">
          We offer 1BHK, 2BHK, 3BHK, and 4BHK flats with different sizes and modern amenities at Kailash Pride.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flat Images */}
          <img
            src="https://images.unsplash.com/photo-1638076452962-74878034f988?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path
            alt="Kailash Pride Building"
            className="rounded-lg shadow-lg"
          />
          {/* Flat Sizes */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Available Flat Sizes:</h3>
            <ul className="list-disc pl-5">
              <li>1BHK - 480 sqft</li>
              <li>2BHK - 720 sqft</li>
              <li>3BHK - 1024 sqft</li>
              <li>4BHK - 1250 sqft</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rowhouse;
