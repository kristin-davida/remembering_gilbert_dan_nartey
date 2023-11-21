import React from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="12 - Copy.jpg" alt="Gilbert Dan-Nartey" className="w-full header-img"/>
                    <h1 className="font-bold text-3xl text-gray-800 text-center justify-center items-end absolute inset-0 flex">Celebrating the Life of Gilbert Dan-Nartey</h1>
                </div>

                {/*<div className="container mx-auto px-5 py-2 items-center justify-center flex-col">*/}

                {/*    <div className="text-center ">*/}
                {/*        <Link href="/">*/}
                {/*            <span className="cursor-pointer font-bold text-3xl text-gray-800 text-center">Celebrating the Life of Gilbert Dan-Nartey</span>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-row flex-col">
                    <div className=" items-center text-base justify-center px-4 flex  w-2/5">
                        <a className="px-2 ">
                            <Link href="/">
                                <span className="cursor-pointer text-sm text-gray-800 text-center flex relative">Home</span>
                            </Link>
                        </a>
                        <a className="px-2 ">
                            <Link href="/post-message">
                                <span className="cursor-pointer text-sm text-gray-800 text-center flex relative">Post Message</span>
                            </Link>
                        </a>
                        <a className="px-2 ">
                            <Link href="/view-messages">
                                <span className="cursor-pointer text-sm text-gray-800 text-center flex relative">View Messages</span>
                            </Link>
                        </a>
                        <a className="px-2 ">
                            <Link href="/donate">
                                <span className="cursor-pointer text-sm text-gray-800 text-center flex relative">Donate</span>
                            </Link>
                        </a>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default Header;
