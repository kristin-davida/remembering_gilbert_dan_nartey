import "styles/globals.css";

import {Header} from "@/components";
import {Modal} from "@/components";
import React, {useState} from "react";
import DedicationModal from "@/components/DedicationModal";


export default function Home() {

    const [showModal, setShowModal] = useState(false);

  return (
      <div>
        <Header />
          <section className="text-gray-600 body-font">
              <div className="flex flex-col text-center w-full mt-16">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-800 px-8">Tribute and Memorial Donation</h1>
              </div>
              <div className="container px-5 mt-12 mx-auto">
                  <div className="flex flex-wrap -m-4">
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                          <div className="h-full text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                   className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                  <path
                                      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                              </svg>
                              <p className="leading-relaxed">I have such happy memories of your wonderful father, he was a true gentleman and always treated me with such kindness.</p>
                              <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">DH</h2>
                          </div>
                      </div>
                      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                          <div className="h-full text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                   className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                  <path
                                      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                              </svg>
                              <p className="leading-relaxed">He was such a special, kind and loving man and gave me the best dad hugs 🥰(ones I never had from my own dad) and I will remember them forever!
                                  He always looked so happy to see me and made me feel so wanted and accepted in his beautiful family home 🏡
                              </p>
                              <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JC</h2>
                          </div>
                      </div>
                      <div className="lg:w-1/3 lg:mb-0 p-4">
                          <div className="h-full text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                   className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                                  <path
                                      d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                              </svg>
                              <p className="leading-relaxed">We were all blessed to know him! What a wonderful human being! The world needs more like him.</p>
                              <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">YN</h2>
                          </div>
                      </div>
                  </div>
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
                          <a onClick={() => setShowModal(true)}>
                              <DedicationModal />
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