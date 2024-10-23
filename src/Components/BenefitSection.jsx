import React from 'react';

const BenefitSection = () => {
  return (
    <div className="bg-white py-10 px-5 break-before-auto">
      {/* Benefits section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold">Benefit of Choosing Us</h3>
        <div className="flex justify-center gap-10 mt-6">
          <div className="text-center">
            <h4 className="text-xl font-bold">01.</h4>
            <p className="text-gray-500">Access to Exclusive Projects</p>
            <p className="text-gray-400 mt-2">Monitor various exclusive project listings that are sure to be interesting for potential buyers.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">02.</h4>
            <p className="text-gray-500">Personal Data Privacy is Safe</p>
            <p className="text-gray-400 mt-2">All transaction data is kept safe using joint account services, ensuring privacy.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">03.</h4>
            <p className="text-gray-500">Faster and Easier Transactions</p>
            <p className="text-gray-400 mt-2">You can search property types faster and get commissions easily.</p>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Building"
          className="w-full rounded-lg"
        />
      </div>

      {/* Logos section */}
      <div className="flex justify-center gap-6 mt-6">
        <img
          src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo 1"
          className="w-24"
        />
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo 2"
          className="w-24"
        />
        <img
          src="https://images.unsplash.com/photo-1524292691042-82ed9c62673b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo 3"
          className="w-24"
        />
        <img
          src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo 4"
          className="w-24"
        />
        <img
          src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo 5"
          className="w-24"
        />
      </div>
    </div>
  );
};

export default BenefitSection;
