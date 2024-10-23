import React from 'react';


const Property2 = () => {
    const urrr = 'https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div className="bg-gray-50 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Our Projects</h2>

        {/* Kailash Pride Project */}
        <div className="mb-24">
          <h3 className="text-4xl font-semibold text-gray-900 mb-6 border-b-4 border-yellow-400 inline-block">Kailash Pride Apartments</h3>
          <p className="text-lg text-gray-600 mb-12">
            Explore luxurious apartment options at Kailash Pride. We offer 1BHK, 2BHK, 3BHK, and 4BHK flats designed for comfort and convenience.
          </p>
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-6">
              <div>
                <p className="text-xl font-medium text-gray-800">1 BHK - 480 sqft</p>
                <img src="https://i.pinimg.com/originals/a9/f6/4e/a9f64ebbf1f08b1a9f6a0a6b51887028.jpg" alt="1BHK flat" className="w-full h-56 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">2 BHK - 720 sqft</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2j9oNvXIPyUAc6buYBDrgbAAbgcsstppRQ&s" alt="2BHK flat" className="w-full h-56 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-medium text-gray-800">3 BHK - 1024 sqft</p>
                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/FB/JZ/BR/83763009/3d-floor-plan-design-.jpg" alt="3BHK flat" className="w-full h-56 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">4 BHK - 1250 sqft</p>
                <img src="https://i.pinimg.com/originals/93/94/eb/9394ebdcebdf27a75a1a7a0eaf1143ef.png" alt="4BHK flat" className="w-full h-56 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kailash Pride Building" className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
        </div>

        {/* Farm House Project */}
        <div>
          <h3 className="text-4xl font-semibold text-gray-900 mb-6 border-b-4 border-green-500 inline-block">Farm House Project</h3>
          <p className="text-lg text-gray-600 mb-12">
            Discover the perfect blend of luxury and nature with our Farm House project. Surrounded by expansive greenery, our farm houses provide a serene living experience with modern amenities.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <img src="https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Farm House" className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-800">
                Our farm houses are designed for comfort, offering private gardens, outdoor space, and a host of modern amenities for a peaceful life.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Expansive private gardens and outdoor space</li>
                <li>Modern, luxurious amenities</li>
                <li>Recreational areas including swimming pool</li>
                <li>Tranquil surroundings away from the city</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property2;
