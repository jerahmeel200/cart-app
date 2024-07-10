import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="w-full max-w-[1450px] mx-auto     px-10 py-2 flex flex-wrap justify-between bg-black">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
          <h5 className="font-bold mb-2">Learn</h5>
          <ul>
            <li><a href="#" className="hover:underline">Technical Support</a></li>
            <li><a href="#" className="hover:underline">Trade-In</a></li>
            <li><a href="#" className="hover:underline">Repairs</a></li>
            <li><a href="#" className="hover:underline">iCare</a></li>
            <li><a href="#" className="hover:underline">Device Financing</a></li>
            <li><a href="#" className="hover:underline">Store Locator</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
          <h5 className="font-bold mb-2">Products</h5>
          <ul>
            <li><a href="#" className="hover:underline">Shop iPad</a></li>
            <li><a href="#" className="hover:underline">Shop iPhone</a></li>
            <li><a href="#" className="hover:underline">Shop Mac</a></li>
            <li><a href="#" className="hover:underline">Shop Accessories</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
          <h5 className="font-bold mb-2">Policies</h5>
          <ul>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-5">
          <h5 className="font-bold mb-2">Subscribe</h5>
          <p className="mb-2">Sign up to get the latest on sales, new releases and more.</p>
          <form className="flex flex-col">
            <input type="email" placeholder="Email" className="px-3 py-2 mb-2 rounded border border-gray-400" />
            <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
