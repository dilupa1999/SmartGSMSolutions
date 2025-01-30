import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="py-16">
      <div className="flex mx-auto overflow-hidden bg-black rounded-lg shadow-lg maxbla-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-[url('/assets/images/img1.png')]"
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700">Login Now</h2>
          <p className="text-xl text-center text-gray-600">Welcome back!</p>
          
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 uppercase"></p>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded appearance-none bg-pink-50 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded appearance-none bg-pink-50 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-pink-500 rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a href="/signup" className="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
