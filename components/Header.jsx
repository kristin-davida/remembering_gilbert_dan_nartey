import React from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <div>
            <img src="3.jpg" className="w-full header-img"/>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto px-5 py-2 items-center justify-center flex-col">
                    <div className="text-center ">
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-3xl text-gray-800 text-center">Celebrating the Life of Gilbert Dan-Nartey</span>
                        </Link>
                    </div>
                </div>
                <div className="container mx-auto flex flex-wrap px-5 py-2 items-center justify-center flex-col">
                    <div className=" items-center text-base justify-center px-4">
                        <a className="px-4">
                            <Link href="/">
                                <span className="cursor-pointer text-sm text-gray-800">Home</span>
                            </Link>
                        </a>
                        <a className="px-4">
                            <Link href="/post-message">
                                <span className="cursor-pointer text-sm text-gray-800">Post a Message</span>
                            </Link>
                        </a>
                        <a className="px-4">
                            <Link href="/view-messages">
                                <span className="cursor-pointer text-sm text-gray-800">View all Messages</span>
                            </Link>
                        </a>
                        <a className="px-4">
                            <Link href="/donate">
                                <span className="cursor-pointer text-sm text-gray-800">Donate</span>
                            </Link>
                        </a>
                    </div>

                </div>
            </header>
        </div>

    );
};

export default Header;
