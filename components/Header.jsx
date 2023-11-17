import React from 'react';

import Link from 'next/link';

const Header = () => {

    return (
        <header className="text-gray-600 body-font bg-gray-800">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="md:float-left block px-4">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-3xl text-white">Celebrating the Life of Gilbert Dan-Nartey</span>
                    </Link>
                </div>
                <div className="md:ml-auto flex flex-wrap items-center text-base justify-center px-4">
                    <a className="px-4">
                        <Link href="/">
                            <span className="cursor-pointer text-sm text-white">Home</span>
                        </Link>
                    </a>
                    <a className="px-4">
                        <Link href="/post-message">
                            <span className="cursor-pointer text-sm text-white">Post a Message</span>
                        </Link>
                    </a>
                    <a className="px-4">
                        <Link href="/view-messages">
                            <span className="cursor-pointer text-sm text-white">View all Messages</span>
                        </Link>
                    </a>
                </div>

            </div>
        </header>

    );
};

export default Header;
