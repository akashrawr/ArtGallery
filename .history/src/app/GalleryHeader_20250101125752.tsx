import React from 'react';

const GalleryHeader = ({ openModal, navigateToLogin }: { openModal: () => void, navigateToLogin: () => void }) => {
  return (
    <div className="mb-6 pl-2 border-b-8 border-blue-800 flex items-center lg:items-stretch flex-row">
      <h1 className="select-none transition transform origin-left -skew-x-6 inline-block p-2 text-5xl bg-gradient-to-tr from-blue-800 to-blue-500 text-transparent bg-clip-text font-extrabold notranslate">
        ArtyFiji
      </h1>
      <div className="justify-end flex flex-1 pt-4 pr-8 pb-4">
        <button
          onClick={openModal}
          className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 hover:text-blue-100 bg-blue-50 text-blue-700 border duration-200 ease-in-out border-blue-600 transition mr-4"
        >
          <div className="flex leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </div>
        </button>

        {/* User Login Button */}
        <button
          onClick={navigateToLogin} // Trigger navigation to the login page
          className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 hover:text-blue-100 bg-blue-50 text-blue-700 border duration-200 ease-in-out border-blue-600 transition"
        >
          <div className="flex leading-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 18a8.25 8.25 0 0115 0" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GalleryHeader;
