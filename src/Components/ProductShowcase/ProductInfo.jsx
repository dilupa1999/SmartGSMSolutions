import React from "react";
import img1 from "/assets/images/category/apple.png";

const ProductInfo = () => {
  return (
    <div>
      <div className="py-8 bg-gray-100 0">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row">
            {/* Image Section */}
            <div className="px-4 md:flex-1">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="object-cover w-full h-full"
                  src={img1}
                  alt="Product"
                />
              </div>
              <div className="flex mb-4 -mx-2">
                <div className="w-1/2 px-2">
                  <button className="w-full px-4 py-2 font-bold text-white bg-pink-500 rounded-full hover:bg-pink-800 ">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 ">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="px-4 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h2>
              <p className="mb-4 text-sm text-white">
              Quality products at great prices
                Rigorous refurbishment process prior to sale
                Covered by Apple’s one-year limited warrantyThis will open a new window.
                Covered by Apple’s 14-day returns policyThis will open a new window.
                AppleCareThis will open a new window. product can be purchased
                Engraving and gift wrap not available for refurbished products
                Supplies are limited
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Price:
                  </span>
                  <span className="text-gray-600 ">
                    LKR 5555
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 mr-2 bg-gray-800 rounded-full"></button>
                  <button className="w-6 h-6 mr-2 bg-red-500 rounded-full"></button>
                  <button className="w-6 h-6 mr-2 bg-blue-500 rounded-full"></button>
                  <button className="w-6 h-6 mr-2 bg-yellow-500 rounded-full"></button>
                </div>
              </div>

              {/* Size Selection */}
              {/* <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 mr-2 font-bold text-gray-700 bg-gray-300 rounded-full hover:bg-gray-400 "
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Product Description */}
              <div>
                <span className="font-bold text-gray-700 ">
                  Product Description:
                </span>
                <p className="mt-2 text-sm text-gray-600">
                S7 with 64-bit dual-core processor
                </p>
                <p className="mt-2 text-sm text-gray-600">
                Electrical heart sensor (ECG app)¹
                </p>
                <p className="mt-2 text-sm text-gray-600">
                Water resistant to 50 metres²
                </p>
                <p className="mt-2 text-sm text-gray-600">
                Always-On Retina LTPO OLED display (1,000 nits brightness)
                </p>
                <p className="mt-2 text-sm text-gray-600">
                802.11b/g/n 2.4GHz and 5GHz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
