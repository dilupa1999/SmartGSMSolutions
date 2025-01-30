import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between px-4 py-8 mx-auto mt-8 mb-8 shadow-md max-w-7xl md:py-12 lg:flex-row rounded-2xl">
        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold text-center text-white md:mb-0 lg:mb-0 lg:text-left md:text-3xl lg:text-4xl xl:text-5xl">
          Get 25% discount on your next purchase
        </h2>

        {/* Form */}
        <form
          name="email-form"
          method="get"
          className="relative flex flex-col items-center w-full max-w-lg gap-4 mx-auto sm:flex-row lg:justify-end"
        >
          {/* Email Input */}
          <input
            type="email"
            className="w-full h-10 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:outline-none sm:flex-1"
            placeholder="Enter your email"
            required
          />

          {/* Submit Button */}
          <input
            type="submit"
            value="Subscribe"
            className="w-full cursor-pointer rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-pink-600 transition-all duration-300 shadow-md hover:bg-pink-500 hover:text-white hover:shadow-lg sm:w-auto"
          />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
