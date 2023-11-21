import "styles/globals.css";

import {Header} from "@/components";
import {Modal} from "@/components";
import React, {useState} from "react";


export default function Home() {

    const [showModal, setShowModal] = useState(false);

  return (
      <div>
        <Header />
          <section className="text-gray-600 body-font">
              <div className="flex flex-col text-center w-full mt-16">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800">Tribute and Memorial Donation</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">*impact statement*</p>
              </div>
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                      <div className="sm:w-1/2 mb-10 px-4">
                          <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full"
                                   src="10.jpg"/>
                          </div>
                          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate to the Family</h2>
                          <p className="leading-relaxed text-base">The Dan-Nartey Family thank you for your kind donation. Your kind sympathy and support is greatly appreciated.</p>
                          <a onClick={() => setShowModal(true)}>
                              <Modal />
                          </a>
                      </div>
                      <div className="sm:w-1/2 mb-10 px-4">
                          <div className="rounded-lg h-64 overflow-hidden">
                              <img alt="content" className="object-cover object-center h-full w-full"
                                   src="alzheimers.png"/>
                          </div>
                          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Donate to Charity</h2>
                          {/* eslint-disable-next-line react/no-unescaped-entities */}
                          <p className="leading-relaxed text-base">The Dan-Nartey Family have chosen to support the The Alzheimer's Society in loving memory of Gilbert. Any donations made are greatly appreciated and will contribute to making a difference in the lives of those living with dementia and alzheimer's.</p>
                          <a href="https://www.alzheimers.org.uk/get-involved/donate?form=DonateNow">
                              <button
                                  className="flex mx-auto mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Donate
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export const metadata = {
    title: 'Book of Condolence',
    description: 'Submit a message on our online memorial book in loving memory of Gilbert Dan-Nartey',
}