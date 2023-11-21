"use client"
import React, { useState } from "react";
import "styles/globals.css";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button type="button"
                    onClick={() => setShowModal(true)}
                className="flex mx-auto mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Donate
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-2xl font=semibold mr-4">Redirecting</h3>
                                    <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                                        <span className="text-black opacity-7 h-6 w-6 text-l block bg-gray-400 py-0 rounded-full">x</span>
                                    </button>
                                </div>
                                <div className="relative container px-8 mx-auto">
                                    <div className="flex flex-wrap">
                                        <div className="lg:w-1/2 md:w-full py-2">
                                            <img src="donation_dedication.png" className="center py-4 border-2"/>
                                        </div>
                                        <div className="lg:w-1/2 items-center justify-center text-center mt-8">
                                            <p>Please click the Redirect button below to visit The Alzheimer's Society's website to make your donation.<br /><br />Please dedicate your donation to Gilbert Dan-Nartey so that we can extend our thanks and gratitude.<br /><br />Your kind sympathy and support is greatly appreciated.</p>
                                            <br></br>
                                            <a href="https://www.alzheimers.org.uk/get-involved/donate?form=DonateNow">
                                                <button
                                                    className="text-white bg-gray-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Redirect
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;