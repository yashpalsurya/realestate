import React from "react";
import BenefitSection from "./BenefitSection";
import Footer from "./Footer";

function InteriorCard() {
  return (
    <>
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          From architectural innovation to real estate development, we craft and
          manage spaces that redefine modern living.
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Architecture Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Architecture"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Architecture</h2>
              <p className="text-lg font-semibold mb-4">
                Merging Vision and Nature: Architectural Excellence
              </p>
              <p className="text-gray-600 mb-4">
                We design homes that not only capture the imagination but also
                seamlessly integrate with their natural surroundings.
              </p>
              <p className="text-sm text-gray-500">
                Location: Costa Del Sol, Spain
              </p>
              <p className="text-sm text-gray-500">Year: 2022</p>
            </div>
          </div>

          {/* Interior Design Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEludGVyaW9yJTIwRGVzaWdufGVufDB8fDB8fHww"
              alt="Interior"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Interior Design</h2>
              <p className="text-lg font-semibold mb-4">
                Eco-Chic Interiors: Where Beauty Meets Sustainability
              </p>
              <p className="text-gray-600 mb-4">
                We blend modern elegance with eco-friendly design, ensuring that
                every space is as sustainable as it is beautiful.
              </p>
              <p className="text-sm text-gray-500">Location: New York, USA</p>
              <p className="text-sm text-gray-500">Year: 2023</p>
            </div>
          </div>

          {/* Property Development Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1682144389863-63b999faec0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property Development"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Property Development</h2>
              <p className="text-lg font-semibold mb-4">
                Transforming Visions into Reality
              </p>
              <p className="text-gray-600 mb-4">
                We turn empty lots into vibrant communities, creating spaces
                that are designed to last and provide lasting value.
              </p>
              <p className="text-sm text-gray-500">Location: Dubai, UAE</p>
              <p className="text-sm text-gray-500">Year: 2024</p>
            </div>
          </div>

          {/* Real Estate Consultation Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Real Estate Consultation"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                Real Estate Consultation
              </h2>
              <p className="text-lg font-semibold mb-4">
                Expert Advice for Smart Investments
              </p>
              <p className="text-gray-600 mb-4">
                Whether you are looking to invest, buy, or sell, our expert
                consultation services will guide you in making informed
                decisions.
              </p>
              <p className="text-sm text-gray-500">Location: London, UK</p>
              <p className="text-sm text-gray-500">Year: 2023</p>
            </div>
          </div>

          {/* Property Management Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1661773968831-22d46e01bc50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Property Management"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Property Management</h2>
              <p className="text-lg font-semibold mb-4">
                Managing Properties with Care
              </p>
              <p className="text-gray-600 mb-4">
                Our property management team ensures your investment properties
                are maintained, rented, and generating maximum returns.
              </p>
              <p className="text-sm text-gray-500">Location: Miami, USA</p>
              <p className="text-sm text-gray-500">Year: Ongoing</p>
            </div>
          </div>
        </div>
      </section>
      <BenefitSection />
      <Footer />
    </>
  );
}

export default InteriorCard;
