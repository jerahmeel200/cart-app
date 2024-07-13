import React from "react";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const ProductDetails = () => {
  const details = [
    "The iPhone 15 Pro Max uses Titanium for its frame, which is lighter and stronger than before.",
    "The iPhone 15 Pro Max is powered by the A17 Pro chip, a 3nm processor that promises improved performance.",
    "A new 6-core GPU that promises the best gaming performance on a phone, complete with ray tracing.",
    "The new Action button is coming to the iPhone 15 Pro Max that launches the camera, voice recorder and any app you want, in addition to muting calls.",
    "The iPhone 15 Pro Max gets USB-C charging with USB 3 support for 10 Gbps speeds. This is ideal for transferring directly to Mac or external storage.",
    "The main 48MP camera includes a larger sensor for even better image quality. 24MP photos merge best of details and colors in low light, thanks to new Photonic engine. You also get 2x better low-light performance in portraits. iPhone 15 Pro has a 3x telephoto camera. iPhone 15 Pro Max has 5x optical zoom and 120mm focal length. 25% larger telephoto sensor. The Pro Max uses a tetra-prism design to reflect the light to create sep.",
    // Additional details removed for brevity
  ];

  return (
    <div className="w-full max-w-[1450px] mx-auto bg-[#D9D9D9]">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Product details</h2>
        <ul className="list-disc pl-5 space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-gray-700 sm:hidden">
              {truncateText(detail, 100)}
            </li>
          ))}
          {details.map((detail, index) => (
            <li key={index} className="text-gray-700 hidden sm:block">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

