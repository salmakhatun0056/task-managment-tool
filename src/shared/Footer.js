import React from 'react';

const Footer = () => {
    return (

        <footer class="px-12 bg-gray-800  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="/calender" class="mr-4 hover:underline md:mr-6">Calender</a>
                </li>
                <li>
                    <a href="/to-do" class="mr-4 hover:underline md:mr-6">To-Do</a>
                </li>
            </ul>
        </footer>

    );
};

export default Footer;