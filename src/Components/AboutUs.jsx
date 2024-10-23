import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Us
      </h1>

      {/* About the Company */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Company
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We are a forward-thinking construction company dedicated to setting new standards in modern home design and development. With a passion for innovative architecture and sustainable practices, our projects redefine residential spaces, blending aesthetics and functionality.
        </p>
      </section>

      {/* About the Owner */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-8 w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Owner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Meet Our Founder
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our founder, Yashpal Surya, is a visionary leader in the construction industry. With over 15 years of experience, Yashpal has brought innovative solutions to home design, merging cutting-edge technology with timeless architectural principles. His dedication to quality and attention to detail ensures every project is crafted with care.
          </p>
        </div>
      </section>

      {/* About the Employees */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Employee 1 */}
          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <img
              src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Employee 1"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">John Doe</h3>
            <p className="text-gray-500">Lead Architect</p>
          </div>
          
          {/* Employee 2 */}
          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1541535881962-3bb380b08458?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Employee 2"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Jane Smith</h3>
            <p className="text-gray-500">Project Manager</p>
          </div>

          {/* Employee 3 */}
          <div className="w-full sm:w-64 bg-gray-50 p-4 rounded-lg shadow-md text-center">
            <img
              src="https://images.unsplash.com/photo-1538344479219-09028b60ea0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Employee 3"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Sam Wilson</h3>
            <p className="text-gray-500">Interior Designer</p>
          </div>
        </div>
      </section>

      {/* Vision of the Company */}
      <section className="bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">
          Our Vision
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our vision is to be the leading name in sustainable and innovative home construction. We aim to create spaces that inspire and enhance the lives of those who inhabit them. With a focus on eco-friendly building practices and a commitment to using high-quality materials, we strive to shape the future of residential living.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
