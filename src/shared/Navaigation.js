import React from 'react';
import CustomLink from './CustomLink';

const Navaigation = () => {
    return (
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex mx-auto items-center justify-center h-16">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex   space-x-4">

                                <CustomLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">Home</CustomLink>
                                <CustomLink to="/calender" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">Calendar</CustomLink>
                                <CustomLink to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">About</CustomLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <CustomLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">Home</CustomLink>
                    <CustomLink to="/calender" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">Calendar</CustomLink>
                    <CustomLink to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium  ">About</CustomLink>
                </div>
            </div>
        </nav>

    );
};

export default Navaigation;