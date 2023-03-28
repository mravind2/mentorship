import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl lg:p-10">
            <div>
              <p className="text-4xl text-white">Error 404</p>
              <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-400">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="flex gap-3 mt-10">
              <Link to={'/'}
                className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                
              >
                Go back home
              </Link>
              
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
      <video
  autoPlay
  className="absolute z-10 w-auto min-w-full min-h-full bg-white max-w-none h-96"
  loop
  muted
>
          <source
            src="https://buio.lexingtonthemes.com/images/placeholders/gradient.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default NotFound;
