import React from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <div>
            <header className="text-gray-600 body-font">
                <img src="12.jpg" className="w-full header-img"/>

                <div className="container mx-auto px-5 py-2 items-center justify-center flex-col">

                    <div className="text-center ">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-3xl text-gray-800 text-center">Celebrating the Life of Gilbert Dan-Nartey</span>
                        </Link>
                    </div>
                </div>
                <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-row flex-col">
                    <div className=" items-center text-base justify-center px-4 flex flex-wrap -m-4">
                        <a className="px-2 lg:w-1/4 sm:w-1/4">
                            <Link href="/">
                                <span className="cursor-pointer text-sm text-gray-800 flex relative">Home</span>
                            </Link>
                        </a>
                        <a className="px-2 lg:w-1/4 sm:w-1/4">
                            <Link href="/post-message">
                                <span className="cursor-pointer text-sm text-gray-800 flex relative">Post Message</span>
                            </Link>
                        </a>
                        <a className="px-2 lg:w-1/4 sm:w-1/4">
                            <Link href="/view-messages">
                                <span className="cursor-pointer text-sm text-gray-800 flex relative">View Messages</span>
                            </Link>
                        </a>
                        <a className="px-2 lg:w-1/4 sm:w-1/4">
                            <Link href="/donate">
                                <span className="cursor-pointer text-sm text-gray-800 flex relative">Donate</span>
                            </Link>
                        </a>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Header;
