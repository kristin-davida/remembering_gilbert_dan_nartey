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
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font=semibold mr-4">Donate</h3>
                                    <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                                        <span className="text-black opacity-7 h-6 w-6 text-l block bg-gray-400 py-0 rounded-full">x</span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <img src="bank_details.png"/>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
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