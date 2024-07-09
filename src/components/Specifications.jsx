import React from 'react';

const Specifications = () => {
  return (
    <div className="container mx-auto pt-5 py-5  md:py-25 bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold mb-2">KEY FEATURES</h2>
            <hr className="border-t-2 border-gray-400 mb-2" />
            <ul className="list-disc list-inside">
              <li>Type C port</li>
              <li>Powerful titanium</li>
              <li>Fast charging</li>
              <li>Powerful battery</li>
              <li>Large screen</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold mb-2">WHAT'S IN THE BOX</h2>
            <hr className="border-t-2 border-gray-400 mb-2" />
            <p>iPhone and cord</p>
          </div>
        </div>
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h2 className="font-bold mb-2">SPECIFICATIONS</h2>
          <hr className="border-t-2 border-gray-400 mb-2" />
          <ul className="list-none">
            <li><span className="font-bold">SKU:</span> AP044MP3SD3N6NAFAMZ</li>
            <li><span className="font-bold">Product Line:</span> Lamisol Gadgets</li>
            <li><span className="font-bold">Model:</span> 15 pro max</li>
            <li><span className="font-bold">Weight (kg):</span> 1</li>
            <li><span className="font-bold">Color:</span> Natural</li>
            <li><span className="font-bold">Main Material:</span> Titanium</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
