import React from 'react';

const InfoSection = () => {
  return (
    <div className="bg-white py-10 px-5">
      {/* First section with title and stats */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">We Are Spread All Over the Archipelago</h2>
        <p className="text-gray-500 mt-4">
          Sit consequat aliquat nostrud veniam nisi ex sit. Ultrices facilisi et sit non amet.
        </p>
        <div className="mt-6 flex justify-center gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold">300K+</h3>
            <p className="text-gray-500">Property Options</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">48+</h3>
            <p className="text-gray-500">Partners</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">52K+</h3>
            <p className="text-gray-500">Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">125K+</h3>
            <p className="text-gray-500">Listing Property</p>
          </div>
        </div>
        <button className="mt-8 bg-green-500 text-white py-2 px-4 rounded">
          Our Project
        </button>
      </div>

      {/* Second section with benefits */}
      <div className="mt-10">
        <h3 className="text-center text-2xl font-bold">Benefit of Choosing Us</h3>
        <div className="flex justify-center gap-10 mt-6">
          <div className="text-center">
            <h4 className="text-xl font-bold">01.</h4>
            <p className="text-gray-500">Access to Exclusive Projects</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">02.</h4>
            <p className="text-gray-500">Personal Data Privacy is Safe</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">03.</h4>
            <p className="text-gray-500">Faster and Easier Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
