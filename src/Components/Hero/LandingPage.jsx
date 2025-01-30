import React from 'react';
import img1 from "/assets/images/blogs/blog-1.jpg";
import img2 from "/assets/images/blogs/g.jpg";
import img3 from "/assets/images/blogs/blog-3.jpg";


const RecentNews = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16">
      {/* Grid Container */}
      <h2 className="mb-12 text-3xl font-bold text-center text-white">Recent News</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1 */}
        <div className="flex flex-col overflow-hidden rounded">
          <a href="#">
            <img
              className="w-full"
              src={img1}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-pink-100">
            <a
              href="#"
              className="inline-block mb-2 text-lg font-semibold transition duration-500 ease-in-out hover:text-indigo-600"
            >
              How to choose perfect smartwatch

              </a>
            <p className="text-sm text-gray-500">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?
</p>
            <p className="mt-5 text-xs text-gray-600">
              By
              <a
                href="#"
                className="ml-1 text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>

        {/* Duplicate Cards */}
        <div className="flex flex-col overflow-hidden rounded">
          <a href="#">
            <img
              className="w-full"
              src={img2}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-pink-100">
            <a
              href="#"
              className="inline-block mb-2 text-lg font-semibold transition duration-500 ease-in-out hover:text-indigo-600"
            >
            How to choose perfect gadget
            </a>
            <p className="text-sm text-gray-500">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?

            </p>
            <p className="mt-5 text-xs text-gray-600">
              By
              <a
                href="#"
                className="ml-1 text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col overflow-hidden rounded">
          <a href="#">
            <img
              className="w-full"
              src={img3}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-pink-100">
            <a
              href="#"
              className="inline-block mb-2 text-lg font-semibold transition duration-500 ease-in-out hover:text-indigo-600"
            >
            How to choose perfect VR headset

            </a>
            <p className="text-sm text-gray-500">
            minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?
</p>
            <p className="mt-5 text-xs text-gray-600">
              By
              <a
                href="#"
                className="ml-1 text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Cooking
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out"
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
