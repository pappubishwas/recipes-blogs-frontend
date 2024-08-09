import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md w-full mb-0">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left text */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Subscribe to our NewsLetter
            </h3>
            <p className="mt-4 text-lg leading-8">
              Lone childe there name vexed are sister of for this. He to drop to
              heart yet a which thy true,.
            </p>
          </div>

          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              autoComplete="email"
              className="flex-auto rounded-md border-0 bg-primary px-3.5 py-4 text-white shadow-sm sm:text-sm sm:leading-6 focus:outline-btnColor"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <button
              type="submit"
              className="flex-none py-4 px-8 bg-btnColor text-sm shadow-sm hover:bg-white hover:border-btnColor text-white hover:text-btnColor  text-center font-semibold hover:border rounded-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr/>
      
    </div>
  );
};

export default Subscription;
